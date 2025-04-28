import { api } from "../../lib/axios";

export interface DevolutivosPostData {
  fecha_salida: string;
  fecha_ingreso: string;
  fk_id_elemento: number;
}

export async function postDevolutivos(data: DevolutivosPostData) {
  const response = await api.post("/devolutivos", data);
  return response.data;
}
