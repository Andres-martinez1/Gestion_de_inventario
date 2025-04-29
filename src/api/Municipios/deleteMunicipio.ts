import { api } from "../../lib/axios";

export async function deleteMunicipio(id: number) {
  const response = await api.delete(`/municipios/${id}`);
  return response.data;
}
