import axiosInstance from '../../lib/axios';
import { Salida } from '../../types/Salida';

const ENDPOINT = '/salidas';

// Obtener todas las salidas
export const fetchSalidas = async (): Promise<Salida[]> => {
  try {
    const { data } = await axiosInstance.get<Salida[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener las salidas:', error);
    throw error;
  }
};

// Obtener una salida por ID
export const fetchSalidaById = async (id: number): Promise<Salida> => {
  try {
    const { data } = await axiosInstance.get<Salida>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener la salida con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva salida
export const createSalida = async (newSalida: Omit<Salida, 'id_salida'>): Promise<Salida> => {
  try {
    const { data } = await axiosInstance.post<Salida>(ENDPOINT, newSalida);
    return data;
  } catch (error) {
    console.error('Error al crear la salida:', error);
    throw error;
  }
};

// Actualizar una salida
export const updateSalida = async (updatedSalida: Salida): Promise<Salida> => {
  try {
    const { id_salida, ...salidaData } = updatedSalida;
    const { data } = await axiosInstance.put<Salida>(`${ENDPOINT}/${id_salida}`, salidaData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar la salida con ID ${updatedSalida.id_salida}:`, error);
    throw error;
  }
};

// Eliminar una salida
export const deleteSalida = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la salida con ID ${id}:`, error);
    throw error;
  }
};
