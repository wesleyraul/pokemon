export default function LoadingSpinner() {
  return (
    <div className="overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
      <div className="flex items-center justify-center min-h-[350px] max-h-[350px] min-w-[320px]">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
