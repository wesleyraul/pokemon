import { NextResponse } from "next/server";

export async function GET() {
  try {
    const capturedPokemons = [
      {
        name: "pikachu",
        types: [{ type: { name: "electric" } }],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        weight: 3,
        height: 4,
      },
      {
        name: "charmander",
        types: [{ type: { name: "fire" } }],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        weight: 75,
        height: 6,
      },
      {
        name: "charmander",
        types: [{ type: { name: "fire" } }],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        weight: 75,
        height: 6,
      },
      {
        name: "charmander",
        types: [{ type: { name: "fire" } }],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        weight: 75,
        height: 6,
      },
      {
        name: "charmander",
        types: [{ type: { name: "fire" } }],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        weight: 75,
        height: 6,
      },
    ];
    return NextResponse.json(capturedPokemons);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch captured pokemons" });
  }
}
