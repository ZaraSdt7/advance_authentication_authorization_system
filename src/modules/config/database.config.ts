import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host:process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT??"",10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database:process.env.DB_NAME || 'auth_system',
  entities: ['dist/**/*.entity{.js,.ts}'],
  synchronize: true,
  logging: true
};
