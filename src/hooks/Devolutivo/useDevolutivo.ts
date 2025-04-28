import { useQuery } from "@tanstack/react-query";
import { getDevolutivo } from "../../api/Devolutivo/getDevolutivos";
import { GetDevolutivo } from "../../types/Devolutivo/GetDevolutivo";

export function useDevolutivos() {
  return useQuery<GetDevolutivo[]>({
    queryKey: ["devolutivos"],
    queryFn: getDevolutivo,
  });
}
