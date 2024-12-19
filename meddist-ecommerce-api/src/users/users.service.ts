// src/users/users.service.ts
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { Address } from 'src/addresses/address.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
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
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('E-mail já existe');
      }
      throw error;
    }

    delete newUser.password;
    return newUser;
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user; // Exclude password from the result
      return result;
    }
    return null;
  }
}
