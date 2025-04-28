import axiosInstance from '../../lib/axios';
import { Elemento } from '../../types/Elementos/Elemento';

const ENDPOINT = '/elementos';

// Obtener todos los elementos
export const fetchElementos = async (): Promise<Elemento[]> => {
  try {
    const { data } = await axiosInstance.get<Elemento[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los elementos:', error);
    throw error;
  }
};

// Obtener un elemento por ID
export const fetchElementoById = async (id: number): Promise<Elemento> => {
  try {
    const { data } = await axiosInstance.get<Elemento>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el elemento con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo elemento
export const createElemento = async (newElemento: Omit<Elemento, 'id_elemento'>): Promise<Elemento> => {
  try {
    const { data } = await axiosInstance.post<Elemento>(ENDPOINT, newElemento);
    return data;
  } catch (error) {
    console.error('Error al crear el elemento:', error);
    throw error;
  }
};

// Actualizar un elemento
export const updateElemento = async (updatedElemento: Elemento): Promise<Elemento> => {
  try {
    const { id_elemento, ...elementoData } = updatedElemento;
    const { data } = await axiosInstance.put<Elemento>(`${ENDPOINT}/${id_elemento}`, elementoData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el elemento con ID ${updatedElemento.id_elemento}:`, error);
    throw error;
  }
};

// Eliminar un elemento
export const deleteElemento = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el elemento con ID ${id}:`, error);
    throw error;
  }
};
