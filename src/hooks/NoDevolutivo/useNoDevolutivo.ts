import axiosInstance from '../../lib/axios';
import { NoDevolutivo } from '../../types/NoDevolutivo/NoDevolutivo';

const ENDPOINT = '/no_devolutivo';

// Obtener todos los no devolutivos
export const fetchNoDevolutivos = async (): Promise<NoDevolutivo[]> => {
  try {
    const { data } = await axiosInstance.get<NoDevolutivo[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los no devolutivos:', error);
    throw error;
  }
};

// Obtener un no devolutivo por ID
export const fetchNoDevolutivoById = async (id: number): Promise<NoDevolutivo> => {
  try {
    const { data } = await axiosInstance.get<NoDevolutivo>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el no devolutivo con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo no devolutivo
export const createNoDevolutivo = async (newNoDevolutivo: Omit<NoDevolutivo, 'id_no_devolutivo'>): Promise<NoDevolutivo> => {
  try {
    const { data } = await axiosInstance.post<NoDevolutivo>(ENDPOINT, newNoDevolutivo);
    return data;
  } catch (error) {
    console.error('Error al crear el no devolutivo:', error);
    throw error;
  }
};

// Actualizar un no devolutivo
export const updateNoDevolutivo = async (updatedNoDevolutivo: NoDevolutivo): Promise<NoDevolutivo> => {
  try {
    const { id_no_devolutivo, ...noDevolutivoData } = updatedNoDevolutivo;
    const { data } = await axiosInstance.put<NoDevolutivo>(`${ENDPOINT}/${id_no_devolutivo}`, noDevolutivoData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el no devolutivo con ID ${updatedNoDevolutivo.id_no_devolutivo}:`, error);
    throw error;
  }
};

// Eliminar un no devolutivo
export const deleteNoDevolutivo = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el no devolutivo con ID ${id}:`, error);
    throw error;
  }
};
