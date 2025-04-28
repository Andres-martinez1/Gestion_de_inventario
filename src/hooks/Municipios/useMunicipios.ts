import axiosInstance from '../../lib/axios';
import { Municipio } from '../../types/Municipios/Municipio';

const ENDPOINT = '/municipios';

// Obtener todos los municipios
export const fetchMunicipios = async (): Promise<Municipio[]> => {
  try {
    const { data } = await axiosInstance.get<Municipio[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los municipios:', error);
    throw error;
  }
};

// Obtener un municipio por ID
export const fetchMunicipioById = async (id: number): Promise<Municipio> => {
  try {
    const { data } = await axiosInstance.get<Municipio>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el municipio con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo municipio
export const createMunicipio = async (newMunicipio: Omit<Municipio, 'id_municipio'>): Promise<Municipio> => {
  try {
    const { data } = await axiosInstance.post<Municipio>(ENDPOINT, newMunicipio);
    return data;
  } catch (error) {
    console.error('Error al crear el municipio:', error);
    throw error;
  }
};

// Actualizar un municipio
export const updateMunicipio = async (updatedMunicipio: Municipio): Promise<Municipio> => {
  try {
    const { id_municipio, ...municipioData } = updatedMunicipio;
    const { data } = await axiosInstance.put<Municipio>(`${ENDPOINT}/${id_municipio}`, municipioData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el municipio con ID ${updatedMunicipio.id_municipio}:`, error);
    throw error;
  }
};

// Eliminar un municipio
export const deleteMunicipio = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el municipio con ID ${id}:`, error);
    throw error;
  }
};
