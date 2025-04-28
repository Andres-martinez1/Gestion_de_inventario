import { api } from "../../lib/axios";

export interface AreaPostData {
  nombre_area: string;
  sede: string;
  fk_id_sedes: number;
}

export async function postArea(data: AreaPostData) {
  const response = await api.post("/areas", data);
  return response.data;
}
