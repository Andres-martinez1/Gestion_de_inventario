import axiosInstance from '../../lib/axios';
import { Ficha } from '../../types/Ficha';

const ENDPOINT = '/ficha';

// Obtener todas las fichas
export const fetchFichas = async (): Promise<Ficha[]> => {
  try {
    const { data } = await axiosInstance.get<Ficha[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener las fichas:', error);
    throw error;
  }
};

// Obtener una ficha por ID
export const fetchFichaById = async (id: number): Promise<Ficha> => {
  try {
    const { data } = await axiosInstance.get<Ficha>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener la ficha con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva ficha
export const createFicha = async (newFicha: Omit<Ficha, 'id_ficha'>): Promise<Ficha> => {
  try {
    const { data } = await axiosInstance.post<Ficha>(ENDPOINT, newFicha);
    return data;
  } catch (error) {
    console.error('Error al crear la ficha:', error);
    throw error;
  }
};

// Actualizar una ficha
export const updateFicha = async (updatedFicha: Ficha): Promise<Ficha> => {
  try {
    const { id_ficha, ...fichaData } = updatedFicha;
    const { data } = await axiosInstance.put<Ficha>(`${ENDPOINT}/${id_ficha}`, fichaData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar la ficha con ID ${updatedFicha.id_ficha}:`, error);
    throw error;
  }
};

// Eliminar una ficha
export const deleteFicha = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la ficha con ID ${id}:`, error);
    throw error;
  }
};
