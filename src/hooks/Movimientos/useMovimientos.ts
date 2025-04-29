import { useQuery } from "@tanstack/react-query";
import { getMovimientos } from "../../api/Movimientos/getMovimientos";
import { GetMovimiento } from "../../types/Movimientos/GetMovimiento";

export function useMovimientos() {
  return useQuery<GetMovimiento[]>({
    queryKey: ["movimientos"],
    queryFn: getMovimientos,
  });
}
