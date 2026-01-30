export const InsuranceCard = () => {
  return (
    <div className="relative bg-white shadow-[rgba(0,0,0,0.075)_0px_2px_4px_0px] box-border caret-transparent flex flex-col max-w-full sm:max-w-[400px] break-words w-full mt-6 sm:mt-10 rounded-md">
      <div className="text-white bg-green-700 box-border caret-transparent break-words text-center p-3 sm:p-4 rounded-t-[5px] border-t-white border-b-black/20 border-x-white border-b">
        <svg className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/>
        </svg>
        <strong className="font-bold text-sm sm:text-base box-border caret-transparent break-words">
          Seguros
        </strong>
      </div>
      <div className="box-border caret-transparent grow break-words text-center px-3 sm:px-4 py-4 sm:py-6">
        <h6 className="text-neutral-800/80 text-sm sm:text-base font-medium box-border caret-transparent leading-tight sm:leading-[19.2px] break-words mb-2">
          Información de Pólizas
        </h6>
        <div className="box-border caret-transparent break-words mt-3 sm:mt-4">
          <span className="text-xs font-bold bg-gray-50 box-border caret-transparent inline-block leading-3 break-words text-nowrap px-2 sm:px-[7.8px] py-1 sm:py-[4.2px] rounded-md">
            <svg className="inline-block w-3 h-3 mr-1 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
            En proceso de carga
          </span>
        </div>
      </div>
    </div>
  );
};
