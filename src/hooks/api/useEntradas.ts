import axiosInstance from '../../lib/axios';
import { Entrada } from '../../types/Entrada';

const ENDPOINT = '/entradas';

// Obtener todas las entradas
export const fetchEntradas = async (): Promise<Entrada[]> => {
  try {
    const { data } = await axiosInstance.get<Entrada[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener las entradas:', error);
    throw error;
  }
};

// Obtener una entrada por ID
export const fetchEntradaById = async (id: number): Promise<Entrada> => {
  try {
    const { data } = await axiosInstance.get<Entrada>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener la entrada con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva entrada
export const createEntrada = async (newEntrada: Omit<Entrada, 'id_entrada'>): Promise<Entrada> => {
  try {
    const { data } = await axiosInstance.post<Entrada>(ENDPOINT, newEntrada);
    return data;
  } catch (error) {
    console.error('Error al crear la entrada:', error);
    throw error;
  }
};

// Actualizar una entrada
export const updateEntrada = async (updatedEntrada: Entrada): Promise<Entrada> => {
  try {
    const { id_entrada, ...entradaData } = updatedEntrada;
    const { data } = await axiosInstance.put<Entrada>(`${ENDPOINT}/${id_entrada}`, entradaData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar la entrada con ID ${updatedEntrada.id_entrada}:`, error);
    throw error;
  }
};

// Eliminar una entrada
export const deleteEntrada = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la entrada con ID ${id}:`, error);
    throw error;
  }
};
