import { useState, useEffect } from "react";
import { Pokemon } from "@/common/interfaces/pokemon.interface";
import { mapPokemonTypeColor } from "@/common/consts/pokemonTypeColors";

export function useCardColor(pokemon: Pokemon | null) {
  const [cardColor, setCardColor] = useState();

  useEffect(() => {
    if (pokemon) {
      const type = pokemon?.types[0].toLowerCase();
      setCardColor(type ? mapPokemonTypeColor[type] : "bg-orange-500");
    }
  }, [pokemon]);

  return cardColor;
}
