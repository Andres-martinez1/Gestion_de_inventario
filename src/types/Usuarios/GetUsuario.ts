// types/Usuarios/GetUsuario.ts
import { GetRol } from "../Roles/GetRoles";
import { GetArea } from "../Areas/GetArea";

export interface GetUsuario {
  idUsuario: number;
  identificacion: number;
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;

  // Puede ser un número (solo ID) o un objeto completo
  fkIdArea: number | GetArea | null;
  fkIdRol: number | GetRol | null;
}
