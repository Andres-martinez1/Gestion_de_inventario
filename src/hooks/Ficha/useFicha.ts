import { useQuery } from "@tanstack/react-query";
import { getFichas } from "../../api/Ficha/getFichas";
import { GetFicha } from "../../types/Ficha/GetFicha";

export function useFichas() {
  return useQuery<GetFicha[]>({
    queryKey: ["fichas"],
    queryFn: getFichas,
  });
}
