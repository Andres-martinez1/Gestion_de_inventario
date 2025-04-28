import { useQuery } from "@tanstack/react-query";
import { getAreas } from "../../api/Areas/getAreas";
import { GetArea } from "../../types/Areas/GetArea";

export function useAreas() {
  return useQuery<GetArea[]>({
    queryKey: ["areas"],
    queryFn: getAreas,
  });
}
