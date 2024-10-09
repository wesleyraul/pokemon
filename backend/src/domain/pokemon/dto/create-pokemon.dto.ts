import { IsArray, IsString } from 'class-validator';

export class CreatePokemonDto {
  @IsString({ message: 'Sprite must be a string' })
  sprite: string;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsArray()
  types: [string];

  height: string;
  weight: string;
}
