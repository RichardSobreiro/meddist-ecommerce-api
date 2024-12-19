// src/config/ormconfig.ts
import { DataSource } from 'typeorm';
import { User } from '@/users/user.entity';
import { Address } from '@/addresses/address.entity';

export default new DataSource({
  type: 'postgres',
  host: 'meddist-rds-postgresql-1.ca7cple4hzk3.sa-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: '02091945!Rr++',
  database: 'ecommercedb',
  entities: [User, Address],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
    requestCert: false,
  },
  migrations: ['src/migration/**/*.ts'],
  migrationsTableName: 'migrations',
});
