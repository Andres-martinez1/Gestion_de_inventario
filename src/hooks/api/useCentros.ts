import axiosInstance from '../../lib/axios';
import { Centro } from '../../types/Centro';

const ENDPOINT = '/centros';

// Obtener todos los centros
export const fetchCentros = async (): Promise<Centro[]> => {
  try {
    const { data } = await axiosInstance.get<Centro[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los centros:', error);
    throw error;
  }
};

// Obtener un centro por ID
export const fetchCentroById = async (id: number): Promise<Centro> => {
  try {
    const { data } = await axiosInstance.get<Centro>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el centro con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo centro
export const createCentro = async (newCentro: Omit<Centro, 'id_centro'>): Promise<Centro> => {
  try {
    const { data } = await axiosInstance.post<Centro>(ENDPOINT, newCentro);
    return data;
  } catch (error) {
    console.error('Error al crear el centro:', error);
    throw error;
  }
};

// Actualizar un centro
export const updateCentro = async (updatedCentro: Centro): Promise<Centro> => {
  try {
    const { id_centro, ...centroData } = updatedCentro;
    const { data } = await axiosInstance.put<Centro>(`${ENDPOINT}/${id_centro}`, centroData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el centro con ID ${updatedCentro.id_centro}:`, error);
    throw error;
  }
};

// Eliminar un centro
export const deleteCentro = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el centro con ID ${id}:`, error);
    throw error;
  }
};
