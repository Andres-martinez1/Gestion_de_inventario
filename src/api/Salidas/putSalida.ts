import { api } from "../../lib/axios";

export interface SalidaPutData {
  fecha_salida: string;
  fk_id_bodega: number;
  fk_id_elemento: number;
  cantidad_entregada: number;
  area_destino: number;
  programa_destino: string;
  responsable_retiro: string;
  motivo_salida: string;
}

export async function updateSalida(id: number, data: SalidaPutData) {
  const response = await api.put(`/salida/${id}`, data);
  return response.data;
}
