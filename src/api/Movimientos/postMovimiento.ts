import { api } from "../../lib/axios";

export interface MovimientoPostData {
  elemento: string;
  fecha: string;
  responsable: string;
  pedir: string;
  suministrar: string;
  devolver: string;
  fk_id_usuario: number;
}

export async function postMovimiento(data: MovimientoPostData) {
  const response = await api.post("/movimientos", data);
  return response.data;
}
