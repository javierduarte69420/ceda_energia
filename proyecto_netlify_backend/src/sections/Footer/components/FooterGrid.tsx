export const FooterGrid = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap items-start break-words -mx-2 sm:-mx-3">
      {/* Logo Column */}
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-2 sm:px-3 mb-6 md:mb-0 md:w-1/2 lg:w-1/4">
        <div className="flex items-center gap-3">
          <img
            src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            alt="Gobierno de México"
            className="h-12 sm:h-14 md:h-16"
          />
        </div>
      </div>

      {/* Enlaces Column */}
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-2 sm:px-3 mb-6 md:mb-0 md:w-1/2 lg:w-1/4">
        <h6 className="font-bold text-sm sm:text-base box-border caret-transparent leading-tight sm:leading-[19.2px] break-words mb-3 sm:mb-4">
          Enlaces
        </h6>
        <ul className="box-border caret-transparent list-none break-words pl-0 mb-0 space-y-1.5 sm:space-y-2">
          <li className="box-border caret-transparent break-words">
            <a
              href="https://www.gob.mx/participa"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Participa
            </a>
          </li>
          <li className="box-border caret-transparent break-words">
            <a
              href="https://www.gob.mx/marcoJuridico"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Marco Jurídico
            </a>
          </li>
          <li className="box-border caret-transparent break-words">
            <a
              href="https://www.plataformadetransparencia.org.mx/"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Plataforma Nacional de Transparencia
            </a>
          </li>
          <li className="box-border caret-transparent break-words">
            <a
              href="https://alertadores.funcionpublica.gob.mx/"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Alerta
            </a>
          </li>
          <li className="box-border caret-transparent break-words">
            <a
              href="https://sidec.funcionpublica.gob.mx/"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Denuncia
            </a>
          </li>
        </ul>
      </div>

      {/* ¿Qué es gob.mx? Column */}
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-2 sm:px-3 mb-6 md:mb-0 md:w-1/2 lg:w-1/4">
        <h6 className="font-bold text-sm sm:text-base box-border caret-transparent leading-tight sm:leading-[19.2px] break-words mb-3 sm:mb-4">
          ¿Qué es gob.mx?
        </h6>
        <p className="text-xs sm:text-sm box-border caret-transparent break-words mb-2 sm:mb-3">
          Es el portal único de trámites, información y participación ciudadana.{" "}
          <a
            href="https://www.gob.mx/que-es-gobmx"
            className="text-white hover:underline box-border caret-transparent break-words"
          >
            Leer más
          </a>
        </p>
        <ul className="box-border caret-transparent list-none break-words pl-0 mb-0 space-y-1.5 sm:space-y-2">
          <li className="box-border caret-transparent break-words">
            <a
              href="https://datos.gob.mx/"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Portal de datos abiertos
            </a>
          </li>
          <li className="box-border caret-transparent break-words">
            <a
              href="https://www.gob.mx/accesibilidad"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Declaración de accesibilidad
            </a>
          </li>
          <li className="box-border caret-transparent break-words">
            <a
              href="https://www.gob.mx/terminos"
              className="text-white hover:underline text-xs sm:text-sm box-border caret-transparent break-words"
            >
              Términos y Condiciones
            </a>
          </li>
        </ul>
      </div>

      {/* Síguenos en Column */}
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-2 sm:px-3 md:w-1/2 lg:w-1/4">
        <h6 className="font-bold text-sm sm:text-base box-border caret-transparent leading-tight sm:leading-[19.2px] break-words mb-3 sm:mb-4">
          Síguenos en
        </h6>
        <div className="box-border caret-transparent flex break-words gap-2 sm:gap-3">
          <a
            href="https://www.facebook.com/gobmexico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 box-border caret-transparent break-words"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/GobiernoMX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 box-border caret-transparent break-words"
            aria-label="Twitter/X"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/gobiernomx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 box-border caret-transparent break-words"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCD_0w8JhfVIWP6mYZ5RZ6Rw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 box-border caret-transparent break-words"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
