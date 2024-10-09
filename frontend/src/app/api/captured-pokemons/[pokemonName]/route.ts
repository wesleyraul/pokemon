import { NextResponse } from "next/server";

export async function DELETE(request: Request, context: any) {
  try {
    const { params } = context;
    const pokemonName = params.pokemonName;
    return NextResponse.json({
      status: 200,
      message: `Pokemon ${pokemonName} deleted`,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete pokemon" });
  }
}
