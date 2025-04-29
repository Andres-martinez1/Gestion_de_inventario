import { useQuery } from "@tanstack/react-query";
import { GetNoDevolutivo } from "../../types/NoDevolutivo/GetNoDevolutivo";
import { getNoDevolutivo } from "../../api/NoDevolutivo/getNoDevolutivos";

export function useNoDevolutivo() {
  return useQuery<GetNoDevolutivo[]>({
    queryKey: ["nodevolutivos"],
    queryFn: getNoDevolutivo,
  });
}
