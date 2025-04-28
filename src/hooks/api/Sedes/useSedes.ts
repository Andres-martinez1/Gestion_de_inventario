import axiosInstance from '../../lib/axios';
import { Sede } from '../../types/Sedes/Sede';

const ENDPOINT = '/sedes';

// Obtener todas las sedes
export const fetchSedes = async (): Promise<Sede[]> => {
  try {
    const { data } = await axiosInstance.get<Sede[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener las sedes:', error);
    throw error;
  }
};

// Obtener una sede por ID
export const fetchSedeById = async (id: number): Promise<Sede> => {
  try {
    const { data } = await axiosInstance.get<Sede>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener la sede con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva sede
export const createSede = async (newSede: Omit<Sede, 'id_sede'>): Promise<Sede> => {
  try {
    const { data } = await axiosInstance.post<Sede>(ENDPOINT, newSede);
    return data;
  } catch (error) {
    console.error('Error al crear la sede:', error);
    throw error;
  }
};

// Actualizar una sede
export const updateSede = async (updatedSede: Sede): Promise<Sede> => {
  try {
    const { id_sede, ...sedeData } = updatedSede;
    const { data } = await axiosInstance.put<Sede>(`${ENDPOINT}/${id_sede}`, sedeData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar la sede con ID ${updatedSede.id_sede}:`, error);
    throw error;
  }
};

// Eliminar una sede
export const deleteSede = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la sede con ID ${id}:`, error);
    throw error;
  }
};
