import { api } from "../../lib/axios";

export interface BodegaPutData {
  encargado: string;
  sede: string;
  fk_id_sede: number | null;
}

export async function updateBodega(id: number, data: BodegaPutData) {
  const response = await api.put(`/bodegas/${id}`, data);
  return response.data;
}
