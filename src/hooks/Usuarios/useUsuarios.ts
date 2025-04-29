import { useQuery } from "@tanstack/react-query";
import { getUsuario } from "../../api/Usuarios/getUsuarios";
import { GetUsuario } from "../../types/Usuarios/GetUsuario";

export function useUsuario() {
  return useQuery<GetUsuario[]>({
    queryKey: ["usuarios"],
    queryFn: getUsuario,
  });
}
