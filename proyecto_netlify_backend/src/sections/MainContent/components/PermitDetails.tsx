import { PermitInfoGrid } from "@/sections/MainContent/components/PermitInfoGrid";
import { AuthorizedProducts } from "@/sections/MainContent/components/AuthorizedProducts";
import { InsuranceCard } from "@/sections/MainContent/components/InsuranceCard";
import { VehicleValidationResult } from "@/sections/MainContent/components/VehicleValidationResult";
import { VehicleValidationError } from "@/sections/MainContent/components/VehicleValidationError";
import { useState } from "react";
import { api } from "@/lib/api";
type PermitDetailsProps = {
  onAdminAccess: (password: string) => boolean;
};

export const PermitDetails = ({ onAdminAccess }: PermitDetailsProps) => {
  const [searchType, setSearchType] = useState("placa");
  const [searchValue, setSearchValue] = useState("");
  const [validationResult, setValidationResult] = useState<{
    success: boolean;
    placa?: string;
    serie?: string;
    tipoTransporte?: string;
    vigencia?: string;
    estatusActual?: string;
  } | null>(null);
  const [consultaTimestamp, setConsultaTimestamp] = useState<string>("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerified(true);
      setIsVerifying(false);
    }, 1500);
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    if (value.trim() && !showVerification) {
      setShowVerification(true);
    }
  };

  const handleValidate = async () => {
  if (!searchValue.trim()) return;

  // Check if admin password
  if (onAdminAccess(searchValue)) {
    return;
  }

  // Update timestamp
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  setConsultaTimestamp(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);

  const inputValue = searchValue.toUpperCase();

  try {
    const type = (searchType === "placa" ? "placa" : "serie") as "placa" | "serie";
    const data = await api.validateVehicle(type, inputValue);

    if (data?.success && data?.vehicle) {
      setValidationResult({
        success: true,
        placa: data.vehicle.placa,
        serie: data.vehicle.serie,
        tipoTransporte: data.vehicle.tipoTransporte,
        vigencia: data.vehicle.vigencia,
        estatusActual: data.vehicle.estatusActual,
      });
    } else {
      setValidationResult({
        success: false,
        placa: inputValue,
      });
    }
  } catch (err) {
    console.error("Validation failed:", err);
    setValidationResult({
      success: false,
      placa: inputValue,
    });
  }
};

  return (
    <div className="bg-white box-border caret-transparent grow break-words p-4">
      <PermitInfoGrid />
      <AuthorizedProducts />
      <InsuranceCard />
      <div className="border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-200 box-border caret-transparent break-words text-center mt-6 pt-4 border-t">
        <small className="text-neutral-800/80 text-sm sm:text-base box-border caret-transparent leading-[21px] break-words">
          {consultaTimestamp ? `Consulta pública ${consultaTimestamp}` : "Consulta pública"}
        </small>
      </div>
      <div className="bg-gray-50 box-border caret-transparent break-words mt-4 sm:mt-6 p-4 sm:p-6 rounded-md">
        <h5 className="text-lg sm:text-xl font-medium box-border caret-transparent break-words text-center mb-3 sm:mb-4">
          <svg
            className="inline-block w-5 h-5 mr-2 fill-current text-red-900"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          Validar Vehículo
        </h5>
        <div className="box-border caret-transparent flex flex-wrap justify-center break-words -mx-2 sm:-mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-2 sm:px-3 lg:w-[66.6667%]">
            <div className="relative items-stretch box-border caret-transparent flex flex-wrap break-words w-full mb-3 sm:mb-4">
              <span className="text-white items-center bg-red-900 box-border caret-transparent flex break-words text-center text-nowrap border border-zinc-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-l-md border-solid">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                </svg>
              </span>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="relative appearance-none bg-white text-sm sm:text-base caret-transparent block grow w-[1%] border border-zinc-200 -ml-px pl-2 sm:pl-3 pr-7 sm:pr-9 py-1 sm:py-1.5 rounded-r-md"
              >
                <option value="placa" className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2">
                  Placa
                </option>
                <option value="serie" className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2">
                  Serie
                </option>
              </select>
            </div>
            <div className="relative items-stretch box-border caret-transparent flex flex-wrap break-words w-full mb-3 sm:mb-4">
              <span className="text-white items-center bg-red-900 box-border caret-transparent flex break-words text-center text-nowrap border border-zinc-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-l-md border-solid">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleValidate()}
                placeholder={`Ingrese número de ${searchType} (ej: 58AP1G)`}
                className="relative text-base sm:text-lg md:text-xl font-bold bg-clip-padding box-border caret-transparent block grow tracking-[1px] sm:tracking-[2px] leading-tight sm:leading-[30px] min-h-10 sm:min-h-12 break-words uppercase w-[1%] border border-zinc-200 -ml-px px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-r-lg border-solid"
              />
            </div>
            {showVerification && !isVerified && (
              <div className="box-border caret-transparent break-words text-center mb-4">
                <div className="relative bg-white box-border caret-transparent max-w-[312px] min-w-[250px] break-words border border-zinc-100 pb-3 border-solid mx-auto">
                  <div className="text-neutral-800 text-sm items-center box-border caret-transparent flex leading-[16.8px] min-h-[52px] break-words text-start">
                    <svg
                      className="box-border caret-transparent shrink-0 h-8 w-8 mt-2 mx-2 fill-current"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {isVerifying ? (
                        <path
                          d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
                          className={isVerifying ? "animate-spin" : ""}
                        />
                      ) : (
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      )}
                    </svg>
                    <div className="box-border caret-transparent flex flex-col grow break-words overflow-auto mr-1.5 mt-1">
                      <span className="box-border caret-transparent block break-words text-xs sm:text-sm">
                        Anti-Robot Verification
                      </span>
                      <button
                        type="button"
                        onClick={handleVerification}
                        disabled={isVerifying}
                        className={`font-semibold bg-zinc-100 caret-transparent block break-words text-center border py-0.5 px-2 text-xs sm:text-sm border-solid border-transparent transition-colors ${
                          isVerifying ? "opacity-50 cursor-not-allowed" : "hover:bg-zinc-300"
                        }`}
                      >
                        {isVerifying ? "Verifying..." : "Click to start verification"}
                      </button>
                    </div>
                  </div>
                  <span className="absolute text-neutral-800 text-sm box-border caret-transparent block leading-[14px] break-words text-start right-1.5 bottom-0">
                    <a
                      href="https://friendlycaptcha.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] box-border caret-transparent leading-3 opacity-80 break-words hover:opacity-100"
                    >
                      <b className="font-bold box-border caret-transparent opacity-80 break-words">Friendly</b>
                      Captcha ⇗
                    </a>
                  </span>
                </div>
              </div>
            )}
            {isVerified && (
              <div className="box-border caret-transparent break-words text-center">
                <button
                  type="button"
                  onClick={handleValidate}
                  disabled={!searchValue.trim()}
                  className={`text-white text-base sm:text-lg md:text-xl bg-red-900 caret-transparent leading-tight sm:leading-[30px] break-words align-middle border px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border-solid border-white transition-opacity ${
                    !searchValue.trim()
                      ? "opacity-65 pointer-events-none cursor-not-allowed"
                      : "opacity-100 hover:opacity-90 cursor-pointer"
                  }`}
                >
                  <svg
                    className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 fill-current"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                  Validar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {validationResult && validationResult.success && (
        <VehicleValidationResult
          placa={validationResult.placa}
          serie={validationResult.serie}
          tipoTransporte={validationResult.tipoTransporte!}
          vigencia={validationResult.vigencia!}
          estatusActual={validationResult.estatusActual!}
        />
      )}
      {validationResult && !validationResult.success && (
        <VehicleValidationError placa={validationResult.placa} serie={validationResult.serie} />
      )}
    </div>
  );
};
