import { api } from "../../lib/axios";

export interface BodegaPostData {
  encargado: string;       
  sede: string;             
  fk_id_sede: number | null; 
}

export async function postBodega(data: BodegaPostData) {
  const response = await api.post("/bodegas", data);
  return response.data;
}
