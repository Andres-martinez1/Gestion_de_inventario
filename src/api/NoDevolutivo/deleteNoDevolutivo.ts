import { api } from "../../lib/axios";

export async function deleteNoDevolutivo(id: number) {
  const response = await api.delete(`/NoDevolutivos/${id}`);
  return response.data;
}
