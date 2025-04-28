import { api } from "../../lib/axios";

export interface ElementoPostData {
  nombre_elemento: string;
  bodega: string;
  stock: number;
  clasificacion: string;
  ficha_tecnica: string;
  uso: string;
  estado: string;
  serial: string;
  fk_id_bodega: number;
  fecha_ultimo_movimiento: string;
  estado_material: string;
}

export async function postElemento(data: ElementoPostData) {
  const response = await api.post("/elementos", data);
  return response.data;
}
