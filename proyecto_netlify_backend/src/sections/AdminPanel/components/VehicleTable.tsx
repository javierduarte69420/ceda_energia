import { useState } from "react";

type Vehicle = {
  id: number;
  placa: string;
  serie?: string;
  tipoTransporte: string;
  vigencia: string;
  estatusActual: string;
  createdAt: Date;
};

type VehicleTableProps = {
  vehicles: Vehicle[];
  onUpdate: (id: number, data: any) => void;
  onDelete: (id: number) => void;
  onToggleAuthorization: (id: number, currentStatus: string) => void;
  isMutating: boolean;
};

export const VehicleTable = ({ vehicles, onUpdate, onDelete, onToggleAuthorization, isMutating }: VehicleTableProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>({});

  const handleEdit = (vehicle: Vehicle) => {
    setEditingId(vehicle.id);
    setEditData({
      placa: vehicle.placa,
      serie: vehicle.serie || "",
      tipoTransporte: vehicle.tipoTransporte,
      vigencia: vehicle.vigencia,
    });
  };

  const handleSave = (id: number) => {
    onUpdate(id, editData);
    setEditingId(null);
    setEditData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay vehículos registrados. Haga clic en "Agregar Vehículo" para comenzar.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold">Placa</th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold">Serie</th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold">
              Tipo Transporte
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold">Vigencia</th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold">Estado</th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm font-semibold">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="hover:bg-gray-50">
              {editingId === vehicle.id ? (
                <>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <input
                      type="text"
                      value={editData.placa}
                      onChange={(e) => setEditData({ ...editData, placa: e.target.value.toUpperCase() })}
                      className="w-full px-2 py-1 border rounded text-xs sm:text-sm"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <input
                      type="text"
                      value={editData.serie}
                      onChange={(e) => setEditData({ ...editData, serie: e.target.value.toUpperCase() })}
                      className="w-full px-2 py-1 border rounded text-xs sm:text-sm"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <select
                      value={editData.tipoTransporte}
                      onChange={(e) => setEditData({ ...editData, tipoTransporte: e.target.value })}
                      className="w-full px-2 py-1 border rounded text-xs sm:text-sm"
                    >
                      <option value="TRACTOCAMIÓN">TRACTOCAMIÓN</option>
                      <option value="AUTOTANQUE">AUTOTANQUE</option>
                      <option value="SEMIRREMOLQUE">SEMIRREMOLQUE</option>
                      <option value="CAMIÓN">CAMIÓN</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <input
                      type="date"
                      value={editData.vigencia}
                      onChange={(e) => setEditData({ ...editData, vigencia: e.target.value })}
                      className="w-full px-2 py-1 border rounded text-xs sm:text-sm"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        vehicle.estatusActual === "AUTORIZADO"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {vehicle.estatusActual}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <div className="flex gap-1 sm:gap-2 justify-center flex-wrap">
                      <button
                        onClick={() => handleSave(vehicle.id)}
                        disabled={isMutating}
                        className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded hover:bg-green-700 disabled:opacity-50 text-xs sm:text-sm"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={isMutating}
                        className="bg-gray-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-gray-600 disabled:opacity-50 text-xs sm:text-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 font-mono text-xs sm:text-sm">{vehicle.placa}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 font-mono text-xs sm:text-sm">
                    {vehicle.serie || "-"}
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">{vehicle.tipoTransporte}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">{vehicle.vigencia}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        vehicle.estatusActual === "AUTORIZADO"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {vehicle.estatusActual}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <div className="flex gap-1 sm:gap-2 justify-center flex-wrap">
                      <button
                        onClick={() => handleEdit(vehicle)}
                        disabled={isMutating}
                        className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50 text-xs sm:text-sm"
                        title="Editar"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => onToggleAuthorization(vehicle.id, vehicle.estatusActual)}
                        disabled={isMutating}
                        className={`px-2 sm:px-3 py-1 rounded text-white disabled:opacity-50 text-xs sm:text-sm ${
                          vehicle.estatusActual === "AUTORIZADO"
                            ? "bg-orange-600 hover:bg-orange-700"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                        title={vehicle.estatusActual === "AUTORIZADO" ? "Desautorizar" : "Autorizar"}
                      >
                        {vehicle.estatusActual === "AUTORIZADO" ? "🔒" : "🔓"}
                      </button>
                      <button
                        onClick={() => onDelete(vehicle.id)}
                        disabled={isMutating}
                        className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50 text-xs sm:text-sm"
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
