import { useState } from "react";
import { Pokemon } from "@/common/interfaces/pokemon.interface";

export function useCapture(
  pokemon: Pokemon | null,
  fetchRandomPokemon: () => void,
) {
  const [captureMessage, setCaptureMessage] = useState<string | null>(null);
  const [search, setSearch] = useState(true);

  const tryCapturePokemon = async () => {
    const success = Math.random() < 0.6;
    setSearch(false);

    const pokemonName = pokemon?.name ?? "";
    if (success) {
      try {
        const result = await fetch("/api/pokemons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pokemon),
        });
        if (result.status == 409)
          setCaptureMessage(`Você já capturou o ${pokemonName}!`);
        else setCaptureMessage(`Parabéns! Você capturou o ${pokemonName}!`);
      } catch (e) {
        console.log(e);
      }
    } else {
      setCaptureMessage(`Oh não! O ${pokemonName} escapou!`);
    }
  };

  const tryAgain = () => {
    setSearch(true);
    fetchRandomPokemon();
  };

  return { captureMessage, search, tryCapturePokemon, tryAgain };
}
