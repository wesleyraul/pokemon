import { Pokemon } from "@/common/interfaces/pokemon.interface";
import Image from "next/image";
import { useCardColor } from "@/hooks/useCardColor";

interface PokemonModalProps {
  pokemon: Pokemon | null;
  isVisible: boolean;
  onClose: () => void;
  onRelease: () => void;
}

export default function PokemonModal({
  pokemon,
  isVisible,
  onClose,
  onRelease,
}: PokemonModalProps) {
  if (!isVisible || !pokemon) return null;

  const handleReleaseClick = () => {
    if (confirm(`Tem certeza que deseja soltar ${pokemon.name}?`)) {
      onRelease();
    }
  };

  const cardColor = useCardColor(pokemon);
  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
      <div className={`p-5 rounded-lg shadow-lg ${cardColor}`}>
        <h2 className="text-2xl font-bold mb-4">{pokemonName}</h2>
        <Image
          className="block ml-auto mr-auto"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <p>Tipos: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>

        <div className="mt-4 flex gap-2">
          <button
            className="bg-red-700 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Fechar
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={handleReleaseClick}
          >
            Soltar Pokémon
          </button>
        </div>
      </div>
    </div>
  );
}
