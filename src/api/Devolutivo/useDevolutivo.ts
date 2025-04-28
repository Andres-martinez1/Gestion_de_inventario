import axiosInstance from '../../lib/axios';
import { Devolutivo } from '../../types/Devolutivo/Devolutivo';

const ENDPOINT = '/devolutivo';

// Obtener todos los devolutivos
export const fetchDevolutivos = async (): Promise<Devolutivo[]> => {
  try {
    const { data } = await axiosInstance.get<Devolutivo[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los devolutivos:', error);
    throw error;
  }
};

// Obtener un devolutivo por ID
export const fetchDevolutivoById = async (id: number): Promise<Devolutivo> => {
  try {
    const { data } = await axiosInstance.get<Devolutivo>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el devolutivo con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo devolutivo
export const createDevolutivo = async (newDevolutivo: Omit<Devolutivo, 'id_devolutivo'>): Promise<Devolutivo> => {
  try {
    const { data } = await axiosInstance.post<Devolutivo>(ENDPOINT, newDevolutivo);
    return data;
  } catch (error) {
    console.error('Error al crear el devolutivo:', error);
    throw error;
  }
};

// Actualizar un devolutivo
export const updateDevolutivo = async (updatedDevolutivo: Devolutivo): Promise<Devolutivo> => {
  try {
    const { id_devolutivo, ...devolutivoData } = updatedDevolutivo;
    const { data } = await axiosInstance.put<Devolutivo>(`${ENDPOINT}/${id_devolutivo}`, devolutivoData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el devolutivo con ID ${updatedDevolutivo.id_devolutivo}:`, error);
    throw error;
  }
};

// Eliminar un devolutivo
export const deleteDevolutivo = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el devolutivo con ID ${id}:`, error);
    throw error;
  }
};
