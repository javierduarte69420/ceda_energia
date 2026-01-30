export const PermitInfoGrid = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap break-words -mt-4 sm:-mt-6 -mx-2 sm:-mx-3">
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full mt-4 sm:mt-6 px-2 sm:px-3 md:w-[33.3333%]">
        <label className="text-neutral-800/80 text-xs sm:text-sm box-border caret-transparent inline-block leading-tight sm:leading-[21px] break-words mb-2">
          <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
          </svg>
          Estado del Permiso
        </label>
        <div className="font-semibold box-border caret-transparent break-words">
          <span className="text-white text-xs sm:text-sm font-bold bg-green-700 box-border caret-transparent inline-block leading-4 break-words text-center text-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-[800px]">
            <svg className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
            Vigente
          </span>
        </div>
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full mt-4 sm:mt-6 px-2 sm:px-3 md:w-[33.3333%]">
        <label className="text-neutral-800/80 text-xs sm:text-sm box-border caret-transparent inline-block leading-tight sm:leading-[21px] break-words mb-2">
          <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
          </svg>
          Razón Social
        </label>
        <div className="font-semibold box-border caret-transparent break-words">
          <h5 className="text-base sm:text-lg md:text-xl font-medium box-border caret-transparent break-words mb-2">
            SERVICIOS ESPECIALIZADOS ALANIS SA DE CV
          </h5>
        </div>
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full mt-4 sm:mt-6 px-2 sm:px-3 md:w-[33.3333%]">
        <label className="text-neutral-800/80 text-xs sm:text-sm box-border caret-transparent inline-block leading-tight sm:leading-[21px] break-words mb-2">
          <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
          </svg>
          Número de Permiso
        </label>
        <div className="text-red-500 font-semibold box-border caret-transparent break-words">
          <h5 className="text-base sm:text-lg md:text-xl font-medium box-border caret-transparent break-words mb-2">
            PL/12321/TRA/OM/2015
          </h5>
        </div>
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full mt-4 sm:mt-6 px-2 sm:px-3 md:w-[33.3333%]">
        <label className="text-neutral-800/80 text-xs sm:text-sm box-border caret-transparent inline-block leading-tight sm:leading-[21px] break-words mb-2">
          <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
          </svg>
          Vigencia
        </label>
        <div className="font-semibold box-border caret-transparent break-words">
          <h5 className="text-base sm:text-lg md:text-xl font-medium box-border caret-transparent break-words mb-2">
            Del 2015-12-31 al 2045-12-31
          </h5>
        </div>
      </div>
    </div>
  );
};
