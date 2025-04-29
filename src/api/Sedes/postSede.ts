import { api } from "../../lib/axios";

export interface SedePostData {
  centro: string;
  nombre_bodega: string;
  fk_id_centro: number;
}

export async function postSede(data: SedePostData) {
  const response = await api.post("/sedes", data);
  return response.data;
}
