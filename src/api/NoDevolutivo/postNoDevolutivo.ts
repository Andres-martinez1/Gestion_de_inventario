import { api } from "../../lib/axios";

export interface NoDevolutivoPostData {
  nombre: string;
  fecha_caducidad: string;
  fecha_salida: string;
  fk_id_elemento: number;
  estado_vencimiento: string;
}

export async function postNoDevolutivo(data: NoDevolutivoPostData) {
  const response = await api.post("/nodevolutivos", data);
  return response.data;
}
