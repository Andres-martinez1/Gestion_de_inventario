import { useQuery } from "@tanstack/react-query";
import { getSede } from "../../api/Sedes/getSedes";
import { GetSede } from "../../types/Sedes/GetSede";

export function useSede() {
  return useQuery<GetSede[]>({
    queryKey: ["sedes"],
    queryFn: getSede,
  });
}
