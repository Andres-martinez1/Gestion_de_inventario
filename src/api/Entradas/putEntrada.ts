import { api } from "../../lib/axios";

export interface EntradaPutData {
  fecha_ingreso: string;
  fk_id_bodega: number;
  fk_id_elemento: number;
  cantidad_ingresada: number;
  proveedor: string;
  responsable: string;
  documento_soporte: string;
}

export async function updateEntrada(id: number, data: EntradaPutData) {
  const response = await api.put(`/entrada/${id}`, data);
  return response.data;
}
