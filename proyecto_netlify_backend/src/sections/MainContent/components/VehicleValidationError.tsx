export type VehicleValidationErrorProps = {
  placa?: string;
  serie?: string;
};

export const VehicleValidationError = (props: VehicleValidationErrorProps) => {
  return (
    <div className="bg-red-50 box-border caret-transparent flex items-start sm:items-center break-words mt-4 sm:mt-6 px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-red-200 border-solid">
      <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 fill-current text-red-800 mt-0.5 sm:mt-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
      </svg>
      <span className="text-red-800 text-sm sm:text-base box-border caret-transparent break-words">
        <strong className="font-bold box-border caret-transparent break-words">Error:</strong> Datos de placa no registrados en CNE
      </span>
    </div>
  );
};
