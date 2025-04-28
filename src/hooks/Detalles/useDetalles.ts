import { useQuery } from "@tanstack/react-query";
import { getDetalle } from "../../api/Detalles/getDetalles";
import { GetDetalle } from "../../types/Detalles/GetDetalle";

export function useDetalles() {
  return useQuery<GetDetalle[]>({
    queryKey: ["detalles"],
    queryFn: getDetalle,
  });
}
