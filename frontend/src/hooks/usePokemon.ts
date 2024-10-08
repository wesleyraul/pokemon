import { useState, useEffect } from "react";
import { Pokemon } from "@/interfaces/pokemon.interface";

const mapPokemonTypeColor = {
  grass: "bg-green-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  normal: "bg-red-300",
  psychic: "bg-amber-300",
  bug: "bg-esmerald-500",
  dragon: "bg-teal-800",
  electric: "bg-gray-600",
  rock: "bg-zinc-700",
  fighting: "bg-red-500",
  ghost: "bg-fuchsia-600",
  poison: "bg-purple-800",
  ground: "bg-amber-800",
  ice: "bg-cyan-400",
};

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [cardColor, setCardColor] = useState("bg-gray-500");

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    const data = await response.json();
    setPokemon(data);

    const type = data?.types[0]?.type?.name?.toLowerCase();
    setCardColor(type ? mapPokemonTypeColor[type] : "bg-orange-500");
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return { pokemon, cardColor, fetchRandomPokemon };
}
