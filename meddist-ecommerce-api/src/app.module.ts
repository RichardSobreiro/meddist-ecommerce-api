import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 10,
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'meddist-rds-postgresql-1.ca7cple4hzk3.sa-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '02091945!Rr++',
      database: 'ecommercedb',
      entities: [User],
      synchronize: true, // Note: set to false in production
      ssl: {
        rejectUnauthorized: false,
        requestCert: false,
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
