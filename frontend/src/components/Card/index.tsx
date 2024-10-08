"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import PokemonCard from "@/components/PokemonCard";
import CaptureMessage from "@/components/CaptureMessage";
import { usePokemon } from "@/hooks/usePokemon";
import { useCapture } from "@/hooks/useCapture";

export default function Card() {
  const { pokemon, cardColor, fetchRandomPokemon } = usePokemon();
  const { captureMessage, search, tryCapturePokemon, tryAgain } = useCapture(
    pokemon,
    fetchRandomPokemon,
  );

  if (!pokemon) return <LoadingSpinner />;

  return search ? (
    <PokemonCard
      pokemon={pokemon}
      cardColor={cardColor}
      onCapture={tryCapturePokemon}
      onSearchNew={fetchRandomPokemon}
    />
  ) : (
    <CaptureMessage
      message={captureMessage || ""}
      cardColor={cardColor}
      onRetry={tryAgain}
    />
  );
}
