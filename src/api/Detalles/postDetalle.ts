import { api } from "../../lib/axios";

export interface DetallesPostData {
  movimiento: string;
  elemento: string;
  asignado: string;
  estado: string;
  retorno: string;
  fecha: string;
  fk_id_ficha: number;
}

export async function postDetalles(data: DetallesPostData) {
  const response = await api.post("/detalles", data);
  return response.data;
}
