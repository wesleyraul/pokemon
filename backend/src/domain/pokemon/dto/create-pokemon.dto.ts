import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePokemonDto {
  @ApiProperty({
    description: 'The URL of the Pokémon sprite image.',
    example: 'https://example.com/pikachu.png',
  })
  @IsString({ message: 'The sprite URL must be a valid string.' })
  sprite: string;

  @ApiProperty({
    description: 'The name of the Pokémon.',
    example: 'Pikachu',
  })
  @IsString({ message: 'The Pokémon name must be a valid string.' })
  name: string;

  @ApiProperty({
    description: 'An array of types associated with the Pokémon.',
    example: ['Electric'],
    isArray: true,
  })
  @IsArray({ message: 'Types must be an array of strings.' })
  @IsString({ each: true, message: 'Each type must be a valid string.' })
  types: string[];

  @ApiProperty({
    description: 'The height of the Pokémon in decimeters.',
    example: 4,
    type: String,
  })
  height: string;

  @ApiProperty({
    description: 'The weight of the Pokémon.',
    example: 60,
    type: String,
  })
  weight: string;
}
