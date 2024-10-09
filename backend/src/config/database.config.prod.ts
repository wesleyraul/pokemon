import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env['DATABASE_URL'],
    port: parseInt(process.env['DATABASE_PORT']),
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
    database: process.env['DATABASE'],
    entities: [],
    synchronize: false,
  }),
);
