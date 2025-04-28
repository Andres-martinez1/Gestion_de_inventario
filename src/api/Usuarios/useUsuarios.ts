import axiosInstance from '../../lib/axios';
import { Usuario } from '../../types/Usuarios/Usuario';

const ENDPOINT = '/usuarios';

// Obtener todos los usuarios
export const fetchUsuarios = async (): Promise<Usuario[]> => {
  try {
    const { data } = await axiosInstance.get<Usuario[]>(ENDPOINT);
    return data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};

// Obtener un usuario por ID
export const fetchUsuarioById = async (id: number): Promise<Usuario> => {
  try {
    const { data } = await axiosInstance.get<Usuario>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo usuario
export const createUsuario = async (newUsuario: Omit<Usuario, 'id_usuario'>): Promise<Usuario> => {
  try {
    const { data } = await axiosInstance.post<Usuario>(ENDPOINT, newUsuario);
    return data;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};

// Actualizar un usuario
export const updateUsuario = async (updatedUsuario: Usuario): Promise<Usuario> => {
  try {
    const { id_usuario, ...usuarioData } = updatedUsuario;
    const { data } = await axiosInstance.put<Usuario>(`${ENDPOINT}/${id_usuario}`, usuarioData);
    return data;
  } catch (error) {
    console.error(`Error al actualizar el usuario con ID ${updatedUsuario.id_usuario}:`, error);
    throw error;
  }
};

// Eliminar un usuario
export const deleteUsuario = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${ENDPOINT}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el usuario con ID ${id}:`, error);
    throw error;
  }
};
