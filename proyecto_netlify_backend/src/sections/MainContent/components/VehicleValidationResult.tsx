export type VehicleValidationResultProps = {
  placa?: string;
  serie?: string;
  tipoTransporte: string;
  vigencia: string;
  estatusActual: string;
};

export const VehicleValidationResult = (props: VehicleValidationResultProps) => {
  return (
    <div className="bg-white box-border caret-transparent break-words mt-4 sm:mt-6 border border-zinc-200 border-solid rounded-md overflow-hidden">
      <div className="text-white bg-green-700 box-border caret-transparent flex items-center break-words px-3 sm:px-4 py-2 sm:py-3">
        <svg className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
        </svg>
        <span className="font-medium text-sm sm:text-base box-border caret-transparent break-words">
          Validación Exitosa - Vehículo Registrado en CNE
        </span>
      </div>
      <div className="box-border caret-transparent flex flex-wrap break-words p-3 sm:p-4">
        <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full lg:w-1/2 mb-3 lg:mb-0">
          {props.placa && (
            <div className="box-border caret-transparent break-words mb-2 sm:mb-3">
              <strong className="font-bold text-sm sm:text-base box-border caret-transparent break-words">Placa:</strong>{" "}
              <span className="text-sm sm:text-base box-border caret-transparent break-words">{props.placa}</span>
            </div>
          )}
          {props.serie && (
            <div className="box-border caret-transparent break-words mb-2 sm:mb-3">
              <strong className="font-bold text-sm sm:text-base box-border caret-transparent break-words">Número de Serie:</strong>{" "}
              <span className="text-sm sm:text-base box-border caret-transparent break-words break-all">{props.serie}</span>
            </div>
          )}
          <div className="box-border caret-transparent break-words mb-2 sm:mb-3">
            <strong className="font-bold text-sm sm:text-base box-border caret-transparent break-words">Tipo Transporte:</strong>{" "}
            <span className="text-sm sm:text-base box-border caret-transparent break-words">{props.tipoTransporte}</span>
          </div>
          <div className="box-border caret-transparent break-words mb-2 sm:mb-3">
            <strong className="font-bold text-sm sm:text-base box-border caret-transparent break-words">Vigencia:</strong>{" "}
            <span className="text-sm sm:text-base box-border caret-transparent break-words">{props.vigencia}</span>
          </div>
        </div>
        <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full lg:w-1/2">
          <div className="box-border caret-transparent break-words">
            <strong className="font-bold text-sm sm:text-base box-border caret-transparent block break-words mb-2">
              Estatus Actual de Unidad:
            </strong>
            <div className="flex items-center box-border caret-transparent break-words">
              <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 fill-current text-green-700" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
              </svg>
              <span className="text-green-700 text-lg sm:text-xl font-bold box-border caret-transparent break-words">
                {props.estatusActual}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
