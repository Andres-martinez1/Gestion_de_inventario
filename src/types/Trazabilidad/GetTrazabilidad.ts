export type GetTrazabilidad = {
  id_traza: number;
  fk_id_elemento: number;
  tipo_movimiento: string;
  fecha: string;
  bodega_origen: string;
  bodega_destino: string;
  responsable: string;
  estado_actual: string;
}
