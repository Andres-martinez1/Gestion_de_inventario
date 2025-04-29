import { api } from "../../lib/axios";

export interface FichaPutData {
  programa: string;
  sede: string;
  municipio: string;
  fk_id_area: number;
  fk_id_centro: number;
  fk_id_programa: number;
  fk_id_municipio: number;
  fk_id_sede: number;
}

export async function updateFicha(id: number, data: FichaPutData) {
  const response = await api.put(`/ficha/${id}`, data);
  return response.data;
}
