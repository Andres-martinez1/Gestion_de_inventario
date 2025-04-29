export type GetSalida = {
  id_salida: number;
  fecha_salida: string;
  fk_id_bodega: number;
  fk_id_elemento: number;
  cantidad_entregada: number;
  area_destino: number;
  programa_destino: string;
  responsable_retiro: string;
  motivo_salida: string;
}
