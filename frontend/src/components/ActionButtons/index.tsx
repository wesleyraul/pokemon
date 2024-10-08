interface ActionButtonsProps {
  onCapture: () => void;
  onSearchNew: () => void;
}

export default function ActionButtons({
  onCapture,
  onSearchNew,
}: ActionButtonsProps) {
  return (
    <div className="mt-2 flex justify-between">
      <button
        onClick={onCapture}
        className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2"
      >
        Capturar
      </button>
      <button
        onClick={onSearchNew}
        className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2"
      >
        Procurar outro Pokémon
      </button>
    </div>
  );
}
