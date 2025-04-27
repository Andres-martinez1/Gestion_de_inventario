import { useQuery } from "@tanstack/react-query";

export const useInventario = () => {
  return useQuery({
    queryKey: ["entradas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/inventario");
      if (!res.ok) throw new Error("Error al cargar las entradas");
      return res.json();
    },
  });
};
