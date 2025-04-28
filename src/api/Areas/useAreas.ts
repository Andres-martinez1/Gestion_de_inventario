import axiosInstance from '../../lib/axios';
import { Area } from '../../types/Areas/Area';

const ENDPOINT = '/areas';

// Obtener todas las áreas
export const fetchAreas = async (): Promise<Area[]> => {
  try {
    const { data } = await axiosInstance.get<Area[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener las áreas:', error);
    throw error;
  }
};

// Obtener un área por ID
export const fetchAreaById = async (id: number): Promise<Area> => {
  try {
    const { data } = await axiosInstance.get<Area>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el área con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva área
export const createArea = async (newArea: Omit<Area, 'id_area'>): Promise<Area> => {
  try {
    const { data } = await axiosInstance.post<Area>(ENDPOINT, newArea);
    return data;
  } catch (error) {
    console.error('Error al crear el área:', error);
    throw error;
  }
};

// Actualizar un área
export const updateArea = async (updatedArea: Area): Promise<Area> => {
  try {
    const { id_area, ...areaData } = updatedArea;
    const { data } = await axiosInstance.put<Area>(`${ENDPOINT}/${id_area}`, areaData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el área con ID ${updatedArea.id_area}:`, error);
    throw error;
  }
};

// Eliminar un área
export const deleteArea = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el área con ID ${id}:`, error);
    throw error;
  }
};
