import { api } from "../../lib/axios";

export async function deleteDevolutivo(id: number) {
  const response = await api.delete(`/devolutivos/${id}`);
  return response.data;
}
