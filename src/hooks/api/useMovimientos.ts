import axiosInstance from '../../lib/axios';
import { Movimiento } from '../../types/Movimiento';

const ENDPOINT = '/movimientos';

// Obtener todos los movimientos
export const fetchMovimientos = async (): Promise<Movimiento[]> => {
  try {
    const { data } = await axiosInstance.get<Movimiento[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los movimientos:', error);
    throw error;
  }
};

// Obtener un movimiento por ID
export const fetchMovimientoById = async (id: number): Promise<Movimiento> => {
  try {
    const { data } = await axiosInstance.get<Movimiento>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el movimiento con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo movimiento
export const createMovimiento = async (newMovimiento: Omit<Movimiento, 'id_movimiento'>): Promise<Movimiento> => {
  try {
    const { data } = await axiosInstance.post<Movimiento>(ENDPOINT, newMovimiento);
    return data;
  } catch (error) {
    console.error('Error al crear el movimiento:', error);
    throw error;
  }
};

// Actualizar un movimiento
export const updateMovimiento = async (updatedMovimiento: Movimiento): Promise<Movimiento> => {
  try {
    const { id_movimiento, ...movimientoData } = updatedMovimiento;
    const { data } = await axiosInstance.put<Movimiento>(`${ENDPOINT}/${id_movimiento}`, movimientoData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el movimiento con ID ${updatedMovimiento.id_movimiento}:`, error);
    throw error;
  }
};

// Eliminar un movimiento
export const deleteMovimiento = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el movimiento con ID ${id}:`, error);
    throw error;
  }
};
