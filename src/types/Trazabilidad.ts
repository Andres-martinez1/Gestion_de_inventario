export interface Trazabilidad {
  id_trazabilidad: number;
  id_producto: number;
  cantidad: number;
  fecha_ingreso: string;
  fecha_salida: string;
  estado: string;
  usuario_creacion: number;
  fecha_creacion: string;
  fecha_modificacion: string;
}
