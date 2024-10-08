interface CaptureMessageProps {
  message: string;
  cardColor: string;
  onRetry: () => void;
}

export default function CaptureMessage({
  message,
  onRetry,
  cardColor,
}: CaptureMessageProps) {
  return (
    <div
      className={`overflow-hidden ${cardColor} rounded-lg max-w-xs shadow-lg min-h-[350px] max-h-[350px]`}
    >
      <div className="relative pt-10 px-10 text-center min-h-[240px] max-h-[240px] content-center">
        <p className="text-lg font-bold">{message}</p>
      </div>
      <div className="relative text-white mt-14 px-6 pb-6">
        <button
          onClick={onRetry}
          className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
}
