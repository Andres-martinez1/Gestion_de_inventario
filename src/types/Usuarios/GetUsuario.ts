export type GetUsuario = {
  id_personas: number;
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
