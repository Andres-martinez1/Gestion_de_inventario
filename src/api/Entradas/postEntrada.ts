import { api } from "../../lib/axios";

export interface EntradaPostData {
  fecha_ingreso: string;
  fk_id_bodega: number;
  fk_id_elemento: number;
  cantidad_ingresada: number;
  proveedor: string;
  responsable: string;
  documento_soporte: string;
}

export async function postEntrada(data: EntradaPostData) {
  const response = await api.post("/entradas", data);
  return response.data;
}
