export interface Bodega {
    id_bodega: number;        
    encargado: string;       
    sede: string;             
    fk_id_sede: number | null; 
  }