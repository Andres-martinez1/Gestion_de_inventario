import { api } from "../../lib/axios";

export interface SalidaPostData {
  fecha_salida: string;
  fk_id_bodega: number;
  fk_id_elemento: number;
  cantidad_entregada: number;
  area_destino: number;
  programa_destino: string;
  responsable_retiro: string;
  motivo_salida: string;
}

export async function postSalida(data: SalidaPostData) {
  const response = await api.post("/salidas", data);
  return response.data;
}
