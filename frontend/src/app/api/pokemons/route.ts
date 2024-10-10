import { NextResponse } from "next/server";

export async function POST(req: { method: string; json: () => any }) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { message: "Only POST requests allowed" },
        { status: 405 },
      );
    }
    const data = await req.json();
    const response = await fetch("http://localhost:3001/pokemon/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create pokemon" },
        { status: 500 },
      );
    }
    const result = await response.json();

    if (result.status == 500) throw new Error("Pokemon already captured");

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 409 });
  }
}

export async function GET() {
  try {
    const response = await fetch("http://localhost:3001/pokemon/");
    if (!response.ok) {
      throw new Error("Failed to fetch captured pokemons");
    }
    const capturedPokemons = await response.json();
    const pokemons = capturedPokemons.data;
    return NextResponse.json(pokemons);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch captured pokemons" },
      { status: 500 },
    );
  }
}
