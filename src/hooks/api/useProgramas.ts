import axiosInstance from '../../lib/axios';
import { Programa } from '../../types/Programa';

const ENDPOINT = '/programas';

// Obtener todos los programas
export const fetchProgramas = async (): Promise<Programa[]> => {
  try {
    const { data } = await axiosInstance.get<Programa[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los programas:', error);
    throw error;
  }
};

// Obtener un programa por ID
export const fetchProgramaById = async (id: number): Promise<Programa> => {
  try {
    const { data } = await axiosInstance.get<Programa>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el programa con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo programa
export const createPrograma = async (newPrograma: Omit<Programa, 'id_programa'>): Promise<Programa> => {
  try {
    const { data } = await axiosInstance.post<Programa>(ENDPOINT, newPrograma);
    return data;
  } catch (error) {
    console.error('Error al crear el programa:', error);
    throw error;
  }
};

// Actualizar un programa
export const updatePrograma = async (updatedPrograma: Programa): Promise<Programa> => {
  try {
    const { id_programa, ...programaData } = updatedPrograma;
    const { data } = await axiosInstance.put<Programa>(`${ENDPOINT}/${id_programa}`, programaData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el programa con ID ${updatedPrograma.id_programa}:`, error);
    throw error;
  }
};

// Eliminar un programa
export const deletePrograma = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el programa con ID ${id}:`, error);
    throw error;
  }
};
