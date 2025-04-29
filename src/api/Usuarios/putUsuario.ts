import { api } from "../../lib/axios";

export interface UsuarioPutData {
  identificacion: number;
  nombres: string;
  apellidos: string;
  correo: string;
  area: string;
  ficha: number;
  rol: string;
  fk_id_bodega: number;
  fk_id_ficha: number;
  fk_id_area: number;
}

export async function updateUsuario(id: number, data: UsuarioPutData) {
  const response = await api.put(`/usuario/${id}`, data);
  return response.data;
}
