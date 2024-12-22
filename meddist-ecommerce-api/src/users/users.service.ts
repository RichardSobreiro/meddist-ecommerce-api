// src/users/users.service.ts
import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { Address } from 'src/addresses/address.entity';
import { JwtService } from '@nestjs/jwt';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
      isEmailConfirmed: false,
    });

    try {
      await this.userRepository.save(newUser);

      if (createUserDto.addresses.length) {
        for (const addressData of createUserDto.addresses) {
          const newAddress = this.addressRepository.create({
            ...addressData,
            user: newUser,
          });
          await this.addressRepository.save(newAddress);
        }
      }

      await this.sendConfirmationEmail(newUser);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('E-mail já existe');
      }
      throw error;
    }

    delete newUser.password;
    return newUser;
  }

  async sendConfirmationEmail(user: User) {
    const token = this.jwtService.sign(
      { userId: user.id },
      {
        expiresIn: '1h',
        secret: process.env.JWT_ACCESS_SECRET || 'access-secret-key',
      },
    );
    const confirmationUrl = `${process.env.ECOMMERCE_URL}/confirmar-email?token=${token}`;
    const smtpUser = this.configService.get<string>('SMTP_USER');
    const smtpPassword = this.configService.get<string>('SMTP_PASSWORD');
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: user.email,
      subject: 'MedDist - Confirmação do E-mail',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <table width="100%" style="max-width: 600px; margin: auto; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <thead style="background-color: #0056b3; color: white; text-align: center; padding: 10px;">
              <tr>
                <th style="padding: 20px;">MedDist - Confirmação de E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 20px; text-align: center;">
                  <p style="font-size: 18px; margin-bottom: 20px;">Olá, ${user.fullName}!</p>
                  <p style="margin-bottom: 20px;">
                    Obrigado por se cadastrar! Por favor, confirme seu email clicando no botão abaixo:
                  </p>
                  <a 
                    href="${confirmationUrl}" 
                    style="
                      display: inline-block;
                      padding: 10px 20px;
                      font-size: 16px;
                      color: white;
                      background-color: #0056b3;
                      text-decoration: none;
                      border-radius: 5px;
                      font-weight: bold;
                    ">
                    Confirmar Email
                  </a>
                  <p style="margin-top: 20px; font-size: 14px; color: #555;">
                    Ou copie e cole o seguinte link no seu navegador:<br />
                    <a href="${confirmationUrl}" style="color: #0056b3; text-decoration: none;">${confirmationUrl}</a>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #777;">
                  Caso você não tenha solicitado este email, por favor ignore-o.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }

  async confirmEmail(token: string): Promise<string> {
    const decodedToken = this.jwtService.verify(token, {
      secret: process.env.JWT_ACCESS_SECRET || 'access-secret-key',
    }); // Assuming you use JWT
    const user = await this.userRepository.findOne({
      where: { id: decodedToken.userId },
    });
    if (!user) {
      throw new NotFoundException('Invalid token or user not found.');
    }

    if (user.isEmailConfirmed) {
      throw new ConflictException('Email already confirmed.');
    }

    user.isEmailConfirmed = true;
    await this.userRepository.save(user);

    return 'Email confirmed successfully';
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, attrs: Partial<User>): Promise<User> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, attrs);
    await this.userRepository.save(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async validateUser(email: string, password: string): Promise<any | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      if (!user.isEmailConfirmed) {
        throw new UnauthorizedException(
          'Você precisa confirmar o seu email antes de realizar login.',
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user; // Exclude password from the result
      return result;
    }
    return null;
  }
}
