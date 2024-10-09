import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pokemon } from '../domain/pokemon/entities/pokemon.entity';

export default registerAs(
  'database.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env['DATABASE_URL'],
    port: parseInt(process.env['DATABASE_PORT']),
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
    database: process.env['DATABASE'],
    entities: [Pokemon],
    synchronize: false,
  }),
);
