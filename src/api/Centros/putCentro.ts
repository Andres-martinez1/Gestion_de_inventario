import { api } from "../../lib/axios";

export interface CentroPutData {
  nombre_centro: string;
  fk_id_municipio: number;
}

export async function updateCentro(id: number, data: CentroPutData) {
  const response = await api.put(`/centros/${id}`, data);
  return response.data;
}
