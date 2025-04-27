import { useQuery } from "@tanstack/react-query";

export const useSalidas = () => {
  return useQuery({
    queryKey: ["entradas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/salidas");
      if (!res.ok) throw new Error("Error al cargar las entradas");
      return res.json();
    },
  });
};
