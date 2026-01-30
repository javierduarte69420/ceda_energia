import { useState } from "react";

type AddVehicleFormProps = {
  onSubmit: (data: {
    placa: string;
    serie?: string;
    tipoTransporte: string;
    vigencia: string;
    estatusActual: string;
  }) => void;
  onCancel: () => void;
};

export const AddVehicleForm = ({ onSubmit, onCancel }: AddVehicleFormProps) => {
  const [formData, setFormData] = useState({
    placa: "",
    serie: "",
    tipoTransporte: "TRACTOCAMIÓN",
    vigencia: "",
    estatusActual: "AUTORIZADO",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.placa.trim() || !formData.vigencia) {
      alert("Por favor complete los campos requeridos (Placa y Vigencia)");
      return;
    }
    onSubmit({
      ...formData,
      placa: formData.placa.toUpperCase(),
      serie: formData.serie ? formData.serie.toUpperCase() : undefined,
    });
    setFormData({
      placa: "",
      serie: "",
      tipoTransporte: "TRACTOCAMIÓN",
      vigencia: "",
      estatusActual: "AUTORIZADO",
    });
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6">
      <h4 className="text-base sm:text-lg font-semibold mb-4">Agregar Nuevo Vehículo</h4>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Placa <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={formData.placa}
            onChange={(e) => setFormData({ ...formData, placa: e.target.value.toUpperCase() })}
            placeholder="Ej: 58AP1G"
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Serie (Opcional)</label>
          <input
            type="text"
            value={formData.serie}
            onChange={(e) => setFormData({ ...formData, serie: e.target.value.toUpperCase() })}
            placeholder="Ej: 3AKJGLDR1JSKG1234"
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tipo de Transporte <span className="text-red-600">*</span>
          </label>
          <select
            value={formData.tipoTransporte}
            onChange={(e) => setFormData({ ...formData, tipoTransporte: e.target.value })}
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            required
          >
            <option value="TRACTOCAMIÓN">TRACTOCAMIÓN</option>
            <option value="AUTOTANQUE">AUTOTANQUE</option>
            <option value="SEMIRREMOLQUE">SEMIRREMOLQUE</option>
            <option value="CAMIÓN">CAMIÓN</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Vigencia <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            value={formData.vigencia}
            onChange={(e) => setFormData({ ...formData, vigencia: e.target.value })}
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Estado <span className="text-red-600">*</span>
          </label>
          <select
            value={formData.estatusActual}
            onChange={(e) => setFormData({ ...formData, estatusActual: e.target.value })}
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            required
          >
            <option value="AUTORIZADO">AUTORIZADO</option>
            <option value="NO AUTORIZADO">NO AUTORIZADO</option>
          </select>
        </div>

        <div className="sm:col-span-2 lg:col-span-3 flex gap-2 justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm sm:text-base"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 text-sm sm:text-base"
          >
            Agregar Vehículo
          </button>
        </div>
      </form>
    </div>
  );
};
