import { useState, useEffect } from "react";
import { Pokemon } from "@/common/interfaces/pokemon.interface";
import { mapPokemonTypeColor } from "@/common/consts/pokemonTypeColors";

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
