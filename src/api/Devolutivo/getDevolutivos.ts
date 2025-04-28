import { api } from "../../lib/axios";
import { GetDevolutivo } from "../../types/Devolutivo/GetDevolutivo";

export const getDevolutivo = async (): Promise<GetDevolutivo[]> => {
  const response = await api.get("/devolutivos");
  return response.data;
};
