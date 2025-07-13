import { useState } from "react";
import { GetElemento } from "../types/Elementos/GetElemento";

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  stock: number;
  image: string;
  status: string;
  isHighlighted: boolean;
}

const AdminProducts = () => {
  const [] = useState<"grid" | "list">("grid");
  const [] = useState("");
  const [] = useState("");
  const [] = useState(false);
  const [] = useState(false);
  const [] = useState(false);
  const [] = useState<Product | null>(null);

  const [] = useState<GetElemento>({
    idElemento: 0,
    nombreElemento: "",
    stock: 0,
    clasificacion: "",
    fichaTecnica: "",
    uso: "",
    tipo: "",
    estado: "",
    serial: "",
    fechaCaducidad: new Date(),
    fechaIngreso: new Date(),
    fechaSalida: new Date(),
    fkIdBodega: {
      idBodega: 0,
      nombreBodega: "",
      encargado: "",
    },
    entradas: [],
    salidas: []
  });






  return (
    <div className="p-6">
      {/* ...rest of the unchanged code... */}
    </div>
  );
};

export default AdminProducts;
