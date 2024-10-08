"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import PokemonCard from "@/components/PokemonCard";
import CaptureMessage from "@/components/CaptureMessage";
interface Pokemon {
  sprites: {
    front_default: string;
  };
  name: string;
  types: [{ type: { name: string } }];
}

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
export default function Card() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [cardColor, setcardColor] = useState("bg-gray-500");
  const [search, setSearch] = useState(true);
  const [captureMessage, setCaptureMessage] = useState<string | null>(null);

  const fetchRandomPokemon = async () => {
    setCaptureMessage(null);
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    const data = await response.json();
    setPokemon(data);
    if (data?.types[0].type.name)
      setcardColor(mapPokemonTypeColor[data.types[0].type.name.toLowerCase()]);
    else setcardColor("bg-orange-500");
  };

  const tryCapturePokemon = async () => {
    const success = Math.random() < 0.6;
    setSearch(false);
    const pokemonName = pokemon?.name ?? "";
    if (success) {
      setCaptureMessage(`Parabéns! Você capturou o ${pokemonName}!`);
      await fetch("/api/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon),
      });
    } else {
      setCaptureMessage(`Oh não! O ${pokemonName} escapou!`);
    }
  };

  const tryAgain = () => {
    setSearch(true);
    fetchRandomPokemon();
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

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
