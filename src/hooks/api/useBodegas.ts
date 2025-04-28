import axiosInstance from '../../lib/axios';
import { Bodega } from '../../types/Bodega';

const ENDPOINT = '/bodega';

export const fetchBodegas = async (): Promise<Bodega[]> => {
  const { data } = await axiosInstance.get<Bodega[]>(ENDPOINT);
  return data;
};

export const fetchBodegaById = async (id: number): Promise<Bodega> => {
  const { data } = await axiosInstance.get<Bodega>(`${ENDPOINT}/${id}`);
  return data;
};

export const createBodega = async (newBodega: Omit<Bodega, 'id_bodega'>): Promise<Bodega> => {
  const { data } = await axiosInstance.post<Bodega>(ENDPOINT, newBodega);
  return data;
};

export const updateBodega = async (updatedBodega: Bodega): Promise<Bodega> => {
  const { id_bodega, ...bodegaData } = updatedBodega;
  const { data } = await axiosInstance.put<Bodega>(`${ENDPOINT}/${id_bodega}`, bodegaData);
  return data;
};

export const deleteBodega = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${ENDPOINT}/${id}`);
};
