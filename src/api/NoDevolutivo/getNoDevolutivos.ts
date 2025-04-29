import { api } from "../../lib/axios";
import { GetNoDevolutivo } from "../../types/NoDevolutivo/GetNoDevolutivo";

export const getNoDevolutivo = async (): Promise<GetNoDevolutivo[]> => {
  const response = await api.get("/NoDevolutivos");
  return response.data;
};
