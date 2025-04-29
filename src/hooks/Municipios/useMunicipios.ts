import { useQuery } from "@tanstack/react-query";
import { GetMunicipio } from "../../types/Municipios/GetMunicipio";
import { getMunicipios } from "../../api/Municipios/getMunicipios";

export function useMunicipio() {
  return useQuery<GetMunicipio[]>({
    queryKey: ["municipios"],
    queryFn: getMunicipios,
  });
}
