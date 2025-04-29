import { api } from "../../lib/axios";

export interface MunicipioPutData {
  nombre_municipio: string;
}

export async function updateMunicipio(id: number, data: MunicipioPutData) {
  const response = await api.put(`/municipio/${id}`, data);
  return response.data;
}
