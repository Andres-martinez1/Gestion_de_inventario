import axiosInstance from '../../lib/axios';
import { Detalle } from '../../types/Detalles/Detalle';

const ENDPOINT = '/detalles';

// Obtener todos los detalles
export const fetchDetalles = async (): Promise<Detalle[]> => {
  try {
    const { data } = await axiosInstance.get<Detalle[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los detalles:', error);
    throw error;
  }
};

// Obtener un detalle por ID
export const fetchDetalleById = async (id: number): Promise<Detalle> => {
  try {
    const { data } = await axiosInstance.get<Detalle>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el detalle con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo detalle
export const createDetalle = async (newDetalle: Omit<Detalle, 'id'>): Promise<Detalle> => {
  try {
    const { data } = await axiosInstance.post<Detalle>(ENDPOINT, newDetalle);
    return data;
  } catch (error) {
    console.error('Error al crear el detalle:', error);
    throw error;
  }
};

// Actualizar un detalle
export const updateDetalle = async (updatedDetalle: Detalle): Promise<Detalle> => {
  try {
    const { id, ...detalleData } = updatedDetalle;
    const { data } = await axiosInstance.put<Detalle>(`${ENDPOINT}/${id}`, detalleData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el detalle con ID ${updatedDetalle.id}:`, error);
    throw error;
  }
};

// Eliminar un detalle
export const deleteDetalle = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el detalle con ID ${id}:`, error);
    throw error;
  }
};
