import { api } from "../../lib/axios";

export interface AreaPutData {
  nombre_area: string;
  sede: string;
  fk_id_sedes: number;
}

export async function updateArea(id: number, data: AreaPutData) {
  const response = await api.put(`/areas/${id}`, data);
  return response.data;
}
