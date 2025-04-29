import { api } from "../../lib/axios";

export interface UsuarioPostData {
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

export async function postUsuario(data: UsuarioPostData) {
  const response = await api.post("/usuarios", data);
  return response.data;
}
