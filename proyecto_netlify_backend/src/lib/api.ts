export type Vehicle = {
  id: number;
  placa: string;
  serie?: string | null;
  tipoTransporte: string;
  vigencia: string;
  estatusActual: string;
  createdAt?: string;
};

const fnBase = "/.netlify/functions/vehicles";

const getJson = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data;
};

const sendJson = async (url: string, method: string, body: any, adminKey?: string) => {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(adminKey ? { "X-Admin-Key": adminKey } : {}),
    },
    body: JSON.stringify(body ?? {}),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data;
};

export const api = {
  listVehicles: async (): Promise<Vehicle[]> => {
    const data = await getJson(`${fnBase}?action=list`);
    return data.vehicles || [];
  },
  validateVehicle: async (type: "placa" | "serie", value: string) => {
    return await getJson(`${fnBase}?action=validate&type=${encodeURIComponent(type)}&value=${encodeURIComponent(value)}`);
  },
  createVehicle: async (payload: Omit<Vehicle, "id">, adminKey: string) => {
    return await sendJson(`${fnBase}?action=create`, "POST", payload, adminKey);
  },
  updateVehicle: async (id: number, payload: Partial<Omit<Vehicle, "id">>, adminKey: string) => {
    return await sendJson(`${fnBase}?action=update&id=${id}`, "PATCH", payload, adminKey);
  },
  deleteVehicle: async (id: number, adminKey: string) => {
    const res = await fetch(`${fnBase}?action=delete&id=${id}`, {
      method: "DELETE",
      headers: adminKey ? { "X-Admin-Key": adminKey } : {},
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
    return data;
  },
};
