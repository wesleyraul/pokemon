import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("http://localhost:3001/pokemon/");
    if (!response.ok) {
      throw new Error("Failed to fetch pokemons");
    }
    const capturedPokemons = await response.json();
    const pokemons = capturedPokemons.data;
    return NextResponse.json(pokemons);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch captured pokemons" });
  }
}
