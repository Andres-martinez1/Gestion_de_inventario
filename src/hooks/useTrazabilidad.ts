import { useQuery } from "@tanstack/react-query";

export const useTrazabilidad = () => {
  return useQuery({
    queryKey: ["trazabilidad"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/trazabilidad");
      if (!res.ok) throw new Error("Error al cargar las entradas");
      return res.json();
    },
  });
};
