// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { Address } from '@/addresses/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export UsersService if it's used elsewhere
})
export class UsersModule {}
