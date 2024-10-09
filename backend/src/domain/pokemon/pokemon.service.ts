import { Injectable } from '@nestjs/common';
import { PokemonRepository } from './pokemon.repository';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async create(createPokemonDto: CreatePokemonDto) {
    return await this.pokemonRepository.create(createPokemonDto);
  }

  async findAll() {
    return await this.pokemonRepository.findAll();
  }

  async remove(name: string) {
    return await this.pokemonRepository.remove(name);
  }
}
