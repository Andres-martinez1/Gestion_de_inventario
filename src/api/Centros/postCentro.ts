import { api } from "../../lib/axios";

export interface CentroPostData {
  nombre_centro: string;
  fk_id_municipio: number;
}

export async function postCentro(data: CentroPostData) {
  const response = await api.post("/centros", data);
  return response.data;
}
