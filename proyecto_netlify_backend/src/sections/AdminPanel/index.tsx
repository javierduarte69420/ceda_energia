
import { useEffect, useState } from "react";
import { api, type Vehicle } from "@/lib/api";
import { VehicleTable } from "./components/VehicleTable";
import { AddVehicleForm } from "./components/AddVehicleForm";

type AdminPanelProps = {
  onExit: () => void;
};

export const AdminPanel = ({ onExit }: AdminPanelProps) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<any>(null);

  const [isMutating, setIsMutating] = useState(false);
  const [mutationError, setMutationError] = useState<any>(null);

  // Set this in Netlify env vars (or .env for local):
  // VITE_ADMIN_KEY = same value as ADMIN_KEY in Netlify Functions env
  const adminKey = (import.meta as any).env.VITE_ADMIN_KEY as string | undefined;

  const load = async () => {
    setIsPending(true);
    setError(null);
    try {
      const v = await api.listVehicles();
      setVehicles(v);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleAddVehicle = async (vehicleData: {
    placa: string;
    serie?: string;
    tipoTransporte: string;
    vigencia: string;
    estatusActual: string;
  }) => {
    try {
      setIsMutating(true);
      setMutationError(null);
      await api.createVehicle(vehicleData as any, adminKey || "");
      await load();
      setShowAddForm(false);
    } catch (err: any) {
      console.error("Failed to add vehicle:", err);
      setMutationError(err);
    } finally {
      setIsMutating(false);
    }
  };

  const handleUpdateVehicle = async (
    id: number,
    data: {
      placa?: string;
      serie?: string;
      tipoTransporte?: string;
      vigencia?: string;
      estatusActual?: string;
    }
  ) => {
    try {
      setIsMutating(true);
      setMutationError(null);
      await api.updateVehicle(id, data as any, adminKey || "");
      await load();
    } catch (err: any) {
      console.error("Failed to update vehicle:", err);
      setMutationError(err);
    } finally {
      setIsMutating(false);
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    if (window.confirm("¿Está seguro de que desea eliminar este vehículo?")) {
      try {
        setIsMutating(true);
        setMutationError(null);
        await api.deleteVehicle(id, adminKey || "");
        await load();
      } catch (err: any) {
        console.error("Failed to delete vehicle:", err);
        setMutationError(err);
      } finally {
        setIsMutating(false);
      }
    }
  };

  const handleToggleAuthorization = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "AUTORIZADO" ? "NO AUTORIZADO" : "AUTORIZADO";
    try {
      setIsMutating(true);
      setMutationError(null);
      await api.updateVehicle(id, { estatusActual: newStatus } as any, adminKey || "");
      await load();
    } catch (err: any) {
      console.error("Failed to toggle authorization:", err);
      setMutationError(err);
    } finally {
      setIsMutating(false);
    }
  };
  return (
    <main className="relative bg-white shadow-[rgba(0,0,0,0.075)_0px_2px_4px_0px] box-border caret-transparent flex flex-col max-w-[1400px] break-words w-full mx-2 sm:mx-4 md:mx-auto my-3 sm:my-4 md:my-6 rounded-md">
      <div className="text-white bg-red-900 box-border caret-transparent break-words px-3 sm:px-4 py-3 sm:py-4 rounded-t-[5px] border-t-white border-b-black/20 border-x-white border-b flex justify-between items-center">
        <h2 className="font-bold box-border caret-transparent text-base sm:text-lg leading-tight break-words flex items-center">
          <svg
            className="inline-block w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0 fill-current"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
          Panel de Control - Gestión de Vehículos
        </h2>
        <button
          onClick={onExit}
          className="text-white hover:bg-red-800 px-3 py-1.5 rounded transition-colors text-sm sm:text-base"
        >
          Salir
        </button>
      </div>

      <div className="bg-white box-border caret-transparent grow break-words p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold">Vehículos Registrados ({vehicles?.length || 0})</h3>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            disabled={isMutating}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors disabled:opacity-50 text-sm sm:text-base"
          >
            {showAddForm ? "Cancelar" : "+ Agregar Vehículo"}
          </button>
        </div>

        {mutationError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm sm:text-base">
            Error: {mutationError.message}
          </div>
        )}

        {showAddForm && <AddVehicleForm onSubmit={handleAddVehicle} onCancel={() => setShowAddForm(false)} />}

        {isPending ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-900"></div>
            <p className="mt-2 text-gray-600">Cargando vehículos...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">Error al cargar vehículos: {error.message}</div>
        ) : (
          <VehicleTable
            vehicles={vehicles || []}
            onUpdate={handleUpdateVehicle}
            onDelete={handleDeleteVehicle}
            onToggleAuthorization={handleToggleAuthorization}
            isMutating={isMutating}
          />
        )}
      </div>
    </main>
  );
};
