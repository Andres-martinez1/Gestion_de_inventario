import { api } from "../../lib/axios";

export interface DetallesPutData {
  movimiento: string;
  elemento: string;
  asignado: string;
  estado: string;
  retorno: string;
  fecha: string;
  fk_id_ficha: number;
}

export async function updateDetalles(id: number, data: DetallesPutData) {
  const response = await api.put(`/detalles/${id}`, data);
  return response.data;
}
