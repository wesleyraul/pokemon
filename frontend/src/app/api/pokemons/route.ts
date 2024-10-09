import { NextResponse } from "next/server";

export async function POST(req: { method: string; json: () => any }) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ message: "Only POST requests allowed" });
    }
    const data = await req.json();
    const response = await fetch("http://localhost:3001/pokemon/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create pokemon");
    }

    const createdPokemon = await response.json();

    return NextResponse.json(createdPokemon);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

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
