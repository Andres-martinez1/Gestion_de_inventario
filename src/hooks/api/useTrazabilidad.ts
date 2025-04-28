import axiosInstance from '../../lib/axios';
import { Trazabilidad } from '../../types/Trazabilidad';

const ENDPOINT = '/trazabilidad';

// Obtener toda la trazabilidad
export const fetchTrazabilidad = async (): Promise<Trazabilidad[]> => {
  try {
    const { data } = await axiosInstance.get<Trazabilidad[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener la trazabilidad:', error);
    throw error;
  }
};

// Obtener una trazabilidad por ID
export const fetchTrazabilidadById = async (id: number): Promise<Trazabilidad> => {
  try {
    const { data } = await axiosInstance.get<Trazabilidad>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener la trazabilidad con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva trazabilidad
export const createTrazabilidad = async (newTrazabilidad: Omit<Trazabilidad, 'id_trazabilidad'>): Promise<Trazabilidad> => {
  try {
    const { data } = await axiosInstance.post<Trazabilidad>(ENDPOINT, newTrazabilidad);
    return data;
  } catch (error) {
    console.error('Error al crear la trazabilidad:', error);
    throw error;
  }
};

// Actualizar una trazabilidad
export const updateTrazabilidad = async (updatedTrazabilidad: Trazabilidad): Promise<Trazabilidad> => {
  try {
    const { id_trazabilidad, ...trazabilidadData } = updatedTrazabilidad;
    const { data } = await axiosInstance.put<Trazabilidad>(`${ENDPOINT}/${id_trazabilidad}`, trazabilidadData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar la trazabilidad con ID ${updatedTrazabilidad.id_trazabilidad}:`, error);
    throw error;
  }
};

// Eliminar una trazabilidad
export const deleteTrazabilidad = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la trazabilidad con ID ${id}:`, error);
    throw error;
  }
};
