"use client";

import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import PokemonModal from "@/components/PokemonModal";
import { Pokemon } from "@/common/interfaces/pokemon.interface";
import { mapPokemonTypeColor } from "@/common/consts/pokemonTypeColors";
import Link from "next/link";

export default function CapturedPokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchCapturedPokemons = async () => {
    try {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    } catch (error) {
      console.error("Error fetching captured pokemons:", error);
    }
  };

  useEffect(() => {
    fetchCapturedPokemons();
  }, []);

  const getCardColor = (pokemon: Pokemon) => {
    const primaryType = pokemon.types[0].toLowerCase();
    return mapPokemonTypeColor[primaryType];
  };

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setModalVisible(false);
  };

  const releasePokemon = async () => {
    if (!selectedPokemon) return;
    try {
      const response = await fetch(`/api/pokemons/${selectedPokemon.name}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setPokemons((prevPokemons) =>
          prevPokemons.filter((p) => p.name !== selectedPokemon.name),
        );
        closeModal();
      } else {
        console.error("Erro ao soltar o Pokémon");
      }
    } catch (error) {
      console.error("Erro ao soltar o Pokémon:", error);
    }
  };

  return (
    <main className="bg-gray-400">
      <Link href="/" className="fixed top-4 left-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Retornar
        </button>
      </Link>

      <div className="p-3 flex flex-wrap gap-4 justify-center min-h-screen">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.name} onClick={() => handleCardClick(pokemon)}>
              <PokemonCard
                pokemon={pokemon}
                cardColor={getCardColor(pokemon)}
                showActionButtons={false}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-700">
            Nenhum Pokémon capturado.
          </p>
        )}
      </div>

      <PokemonModal
        pokemon={selectedPokemon}
        isVisible={isModalVisible}
        onClose={closeModal}
        onRelease={releasePokemon}
      />
    </main>
  );
}
