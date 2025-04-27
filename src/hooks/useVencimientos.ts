import { useQuery } from "@tanstack/react-query";

export const useVencimientos = () => {
  return useQuery({
    queryKey: ["entradas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/vencimientos");
      if (!res.ok) throw new Error("Error al cargar las entradas");
      return res.json();
    },
  });
};
