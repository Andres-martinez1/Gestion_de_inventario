export interface Entrada {
  id_entrada: number;
  fecha_ingreso: string;
  fk_id_bodega: number;
  fk_id_elemento: number;
  cantidad_ingresada: number;
  proveedor: string;
  responsable: string;
  documento_soporte: string;
}
