import { api } from "../../lib/axios";

export interface TrazabilidadPostData {
  fk_id_elemento: number;
  tipo_movimiento: string;
  fecha: string;
  bodega_origen: string;
  bodega_destino: string;
  responsable: string;
  estado_actual: string;
}

export async function postTrazabilidad(data: TrazabilidadPostData) {
  const response = await api.post("/trazabilidades", data);
  return response.data;
}
