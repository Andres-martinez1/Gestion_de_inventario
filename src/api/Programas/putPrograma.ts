import { api } from "../../lib/axios";

export interface ProgramaPutData {
  nombre: string;
}

export async function updatePrograma(id: number, data: ProgramaPutData) {
  const response = await api.put(`/programa/${id}`, data);
  return response.data;
}
