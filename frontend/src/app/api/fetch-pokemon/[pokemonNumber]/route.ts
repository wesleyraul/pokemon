import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  try {
    const { params } = context;
    const pokemonNumber = params.pokemonNumber;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch pokemon");
    }
    const pokemon = await response.json();
    const types = pokemon.types.map(
      (typeObject: { type: { name: any } }) => typeObject.type.name,
    );
    const pokemonResponse = {
      sprite: pokemon.sprites.front_default,
      name: pokemon.name,
      types: types,
      height: pokemon.height,
      weight: pokemon.weight,
    };
    return NextResponse.json(pokemonResponse);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch pokemon" });
  }
}
