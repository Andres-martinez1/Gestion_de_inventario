import { useQuery } from "@tanstack/react-query";
import { getCentro } from "../../api/Centros/getCentros";
import { GetCentro } from "../../types/Centros/GetCentro";

export function useCentros() {
  return useQuery<GetCentro[]>({
    queryKey: ["centros"],
    queryFn: getCentro,
  });
}
