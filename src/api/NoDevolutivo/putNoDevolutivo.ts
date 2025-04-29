import { api } from "../../lib/axios";

export interface NoDevolutivoPutData {
  nombre: string;
  fecha_caducidad: string;
  fecha_salida: string;
  fk_id_elemento: number;
  estado_vencimiento: string;
}

export async function updateNoDevolutivo(id: number, data: NoDevolutivoPutData) {
  const response = await api.put(`/nodevolutivo/${id}`, data);
  return response.data;
}
