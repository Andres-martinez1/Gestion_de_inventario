import { api } from "../../lib/axios";

export interface MovimientoPutData {
  elemento: string;
  fecha: string;
  responsable: string;
  pedir: string;
  suministrar: string;
  devolver: string;
  fk_id_usuario: number;
}

export async function updateMovimiento(id: number, data: MovimientoPutData) {
  const response = await api.put(`/movimientos/${id}`, data);
  return response.data;
}
