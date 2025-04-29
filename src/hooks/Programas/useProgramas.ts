import { useQuery } from "@tanstack/react-query";
import { GetPrograma } from "../../types/Programas/GetPrograma";
import { getPrograma } from "../../api/Programas/getProgramas";

export function usePrograma() {
  return useQuery<GetPrograma[]>({
    queryKey: ["programas"],
    queryFn: getPrograma,
  });
}
