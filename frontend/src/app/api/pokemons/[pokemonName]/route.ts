import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: any) {
  try {
    const { params } = context;
    const pokemonName = params.pokemonName;

    if (req.method !== "DELETE") {
      return NextResponse.json(
        { message: "Only Delete requests allowed" },
        { status: 405 },
      );
    }
    await fetch(`http://localhost:3001/pokemon/${pokemonName}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json({
      status: 200,
      message: `Pokemon ${pokemonName} deleted`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete pokemon" },
      { status: 500 },
    );
  }
}
