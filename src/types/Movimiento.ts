export interface Movimiento {
  id_movimiento: number;
  elemento: string;
  fecha: string;
  responsable: string;
  pedir: string;
  suministrar: string;
  devolver: string;
  fk_id_usuario: number;
}
