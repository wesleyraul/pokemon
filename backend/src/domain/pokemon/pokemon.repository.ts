import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const repeat = await this.findOne(createPokemonDto.name);
    if (repeat) throw new Error('Pokemon já existe');
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return await this.pokemonRepository.save(pokemon);
  }

  async findOne(name: string): Promise<Pokemon> {
    return await this.pokemonRepository.findOneBy({ name: name });
  }
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }

  async remove(name: string): Promise<DeleteResult> {
    return await this.pokemonRepository.delete({ name });
  }
}
