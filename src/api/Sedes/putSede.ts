import { api } from "../../lib/axios";

export interface SedePutData {
  centro: string;
  nombre_bodega: string;
  fk_id_centro: number;
}

export async function updateSede(id: number, data: SedePutData) {
  const response = await api.put(`/sede/${id}`, data);
  return response.data;
}
