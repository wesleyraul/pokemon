import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { ConvertIntegerToStringPipe } from './pipes/convert-integer-to-string.pipe';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @UsePipes(ConvertIntegerToStringPipe)
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    try {
      const pokemon = await this.pokemonService.create(createPokemonDto);

      if (!pokemon) {
        return new HttpException(
          'Failed to insert Pokémon',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Pokémon inserted successfully',
        data: pokemon,
      };
    } catch (e) {
      return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    const pokemons = await this.pokemonService.findAll();
    return {
      statusCode: 200,
      message: 'Pokémon list retrieved successfully',
      data: pokemons,
    };
  }

  @Delete(':name')
  async remove(@Param('name') name: string) {
    const result = await this.pokemonService.remove(name);

    if (result.affected === 0) {
      throw new HttpException('Pokémon not found', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: `Pokémon ${name} removed successfully`,
    };
  }
}
