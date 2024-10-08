import Image from "next/image";
import ActionButtons from "@/components/ActionButtons";
import { Pokemon } from "@/interfaces/pokemon.interface";

interface PokemonCardProps {
  pokemon: Pokemon;
  cardColor: string;
  showActionButtons?: boolean;
  onCapture?: () => void;
  onSearchNew?: () => void;
}

export default function PokemonCard({
  pokemon,
  cardColor,
  showActionButtons = false,
  onCapture,
  onSearchNew,
}: PokemonCardProps) {
  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokemonType =
    pokemon.types[0].type.name[0].toUpperCase() +
    pokemon.types[0].type.name.slice(1);

  return (
    <div
      className={`overflow-hidden rounded-lg max-w-xs shadow-lg min-h-[350px] max-h-[350px] min-w-[320px] ${cardColor}`}
    >
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </div>
      <div className="relative text-white px-6 pb-6">
        <span className="block opacity-75 -mb-1">{pokemonType}</span>
        <span className="block font-semibold text-xl">{pokemonName}</span>
        {showActionButtons && (
          <ActionButtons onCapture={onCapture} onSearchNew={onSearchNew} />
        )}
      </div>
    </div>
  );
}
