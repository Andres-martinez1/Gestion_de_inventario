import { api } from "../../lib/axios";

export interface TrazabilidadPutData {
  fk_id_elemento: number;
  tipo_movimiento: string;
  fecha: string;
  bodega_origen: string;
  bodega_destino: string;
  responsable: string;
  estado_actual: string;
}

export async function updateTrazabilidad(id: number, data: TrazabilidadPutData) {
  const response = await api.put(`/trazabilidad/${id}`, data);
  return response.data;
}
