import axiosInstance from '../../lib/axios';
import { Bodega } from '../../types/Bodegas/Bodega';

const ENDPOINT = '/bodega';

// Obtener todas las bodegas
export const fetchBodegas = async (): Promise<Bodega[]> => {
  try {
    const { data } = await axiosInstance.get<Bodega[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener las bodegas:', error);
    throw error; // Re-throw el error para ser gestionado por el consumidor
  }
};

// Obtener una bodega por ID
export const fetchBodegaById = async (id: number): Promise<Bodega> => {
  try {
    const { data } = await axiosInstance.get<Bodega>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener la bodega con ID ${id}:`, error);
    throw error; // Re-throw el error para ser gestionado por el consumidor
  }
};

// Crear una nueva bodega
export const createBodega = async (newBodega: Omit<Bodega, 'id_bodega'>): Promise<Bodega> => {
  try {
    const { data } = await axiosInstance.post<Bodega>(ENDPOINT, newBodega);
    return data;
  } catch (error) {
    console.error('Error al crear la bodega:', error);
    throw error; // Re-throw el error para ser gestionado por el consumidor
  }
};

// Actualizar una bodega
export const updateBodega = async (updatedBodega: Bodega): Promise<Bodega> => {
  try {
    const { id_bodega, ...bodegaData } = updatedBodega;
    const { data } = await axiosInstance.put<Bodega>(`${ENDPOINT}/${id_bodega}`, bodegaData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar la bodega con ID ${updatedBodega.id_bodega}:`, error);
    throw error; // Re-throw el error para ser gestionado por el consumidor
  }
};

// Eliminar una bodega
export const deleteBodega = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la bodega con ID ${id}:`, error);
    throw error; // Re-throw el error para ser gestionado por el consumidor
  }
};
