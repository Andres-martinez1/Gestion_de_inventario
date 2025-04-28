import { api } from "../../lib/axios";

export interface ElementoPutData {
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

export async function updateElemento(id: number, data: ElementoPutData) {
  const response = await api.put(`/elemento/${id}`, data);
  return response.data;
}
