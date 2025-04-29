import { api } from "../../lib/axios";

export interface FichaPostData {
  programa: string;
  sede: string;
  municipio: string;
  fk_id_area: number;
  fk_id_centro: number;
  fk_id_programa: number;
  fk_id_municipio: number;
  fk_id_sede: number;
}

export async function postFicha(data: FichaPostData) {
  const response = await api.post("/fichas", data);
  return response.data;
}
