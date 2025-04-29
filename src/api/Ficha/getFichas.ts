import { api } from "../../lib/axios";
import { GetFicha } from "../../types/Ficha/GetFicha";

export const getFichas = async (): Promise<GetFicha[]> => {
  const response = await api.get("/fichas");
  return response.data;
};
