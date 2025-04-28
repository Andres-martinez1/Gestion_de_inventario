export type GetBodega = {
    id_bodega: number;        
    encargado: string;       
    sede: string;             
    fk_id_sede: number | null; 
  }