import { api } from "../../lib/axios";

export interface MunicipioPostData {
  nombre_municipio: string;
}

export async function postMunicipio(data: MunicipioPostData) {
  const response = await api.post("/municipios", data);
  return response.data;
}
