import { useQuery } from "@tanstack/react-query";
import { getBodega } from "../../api/Bodegas/getBodegas";
import { GetBodega } from "../../types/Bodegas/GetBodega";

export function useBodegas() {
  return useQuery<GetBodega[]>({
    queryKey: ["bodegas"],
    queryFn: getBodega,
  });
}
