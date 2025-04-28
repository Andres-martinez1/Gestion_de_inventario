import { api } from "../../lib/axios";

export interface DevolutivosPutData {
  fecha_salida: string;
  fecha_ingreso: string;
  fk_id_elemento: number;
}

export async function updateDevolutivos(id: number, data: DevolutivosPutData) {
  const response = await api.put(`/devolutivos/${id}`, data);
  return response.data;
}
