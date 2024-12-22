// src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Address } from '../addresses/address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  telephone: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ nullable: false })
  cnpj: string;

  @Column({ nullable: false })
  companySocialReason: string;

  @Column({ nullable: false })
  isEmailConfirmed: boolean;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];
}
