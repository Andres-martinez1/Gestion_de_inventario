// components/GestionUsuarios.tsx
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const rolesDisponibles = ["Administrador", "Líder", "Instructor", "Pasante"];
const permisosDisponibles = [
  "Usuarios", "Roles", "Permisos", "Bodegas", "Categorías",
  "Productos", "Proveedores", "Marcas"
];

const usuariosMock = [
  {
    nombre: "Carlos Rodríguez",
    correo: "carlos@example.com",
    rol: "Administrador",
    estado: "Activo",
    ultimoAcceso: "Hoy, 10:30 AM",
    permisos: 8,
  },
  {
    nombre: "Luis Pérez",
    correo: "luis@example.com",
    rol: "Instructor",
    estado: "Inactivo",
    ultimoAcceso: "12/05/2024, 9:15 AM",
    permisos: 8,
  },
];

function AdminPermisos() {
  const [modalRol, setModalRol] = useState(false);
  const [modalUsuario, setModalUsuario] = useState(false);
  const [nuevoRol, setNuevoRol] = useState("");

  const togglePermiso = (_perm: string): void => {
    console.log("Cambiar permiso:", _perm);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
        <p className="text-gray-500">Administre los usuarios del sistema</p>
        <div className="space-x-2">
          <button onClick={() => setModalRol(true)} className="px-4 py-2 bg-gray-900 text-white rounded-[9px]">Nuevo Rol</button>
          <button onClick={() => setModalUsuario(true)} className="px-4 py-2 bg-gray-900 text-white rounded-[9px]">Nuevo Usuario</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden mt-4">
        <table className="w-full text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-4 text-left">Nombre</th>
              <th className="p-4 text-left">Correo</th>
              <th className="p-4 text-left">Rol</th>
              <th className="p-4 text-left">Estado</th>
              <th className="p-4 text-left">Último Acceso</th>
              <th className="p-4 text-left">Permisos</th>
              <th className="p-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosMock.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4">{user.nombre}</td>
                <td className="p-4">{user.correo}</td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{user.rol}</span>
                </td>
                <td className="p-4">
                  {user.estado === "Activo" ? (
                    <span className="text-green-600">Activo</span>
                  ) : (
                    <span className="text-red-600">Inactivo</span>
                  )}
                </td>
                <td className="p-4">{user.ultimoAcceso}</td>
                <td className="p-4">{user.permisos} permisos</td>
                <td className="p-4 flex gap-2 items-center">
                  <EyeIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
                  <PencilIcon className="w-5 h-5 text-yellow-600 cursor-pointer" />
                  <TrashIcon className="w-5 h-5 text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Nuevo Rol */}
      <Transition appear show={modalRol} as="div">
        <Dialog onClose={() => setModalRol(false)} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Panel className="bg-white p-6 rounded shadow-md w-full max-w-md">
              <Dialog.Title className="text-lg font-bold">Crear Nuevo Rol</Dialog.Title>
              <input
                className="mt-4 w-full border rounded px-3 py-2"
                placeholder="Ej: Supervisor, Coordinador..."
                value={nuevoRol}
                onChange={(e) => setNuevoRol(e.target.value)}
              />
              <div className="mt-4 flex justify-end space-x-2">
                <button onClick={() => setModalRol(false)} className="px-4 py-2 bg-gray-200 rounded">Cancelar</button>
                <button className="px-4 py-2 bg-gray-900 text-white rounded">Crear Rol</button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>

      {/* Modal Nuevo Usuario */}
      <Transition appear show={modalUsuario} as="div">
        <Dialog onClose={() => setModalUsuario(false)} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Panel className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
              <Dialog.Title className="text-lg font-bold">Agregar Nuevo Usuario</Dialog.Title>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input className="border rounded px-3 py-2" placeholder="Nombre completo" />
                <input className="border rounded px-3 py-2" placeholder="correo@ejemplo.com" />
                <select className="border rounded px-3 py-2">
                  <option value="">Seleccionar rol</option>
                  {rolesDisponibles.map((rol, i) => (
                    <option key={i}>{rol}</option>
                  ))}
                </select>
                <select className="border rounded px-3 py-2">
                  <option value="">Seleccionar área</option>
                  <option>Inventario</option>
                  <option>Logística</option>
                </select>
                <input className="border rounded px-3 py-2" type="password" placeholder="Contraseña" />
                <input className="border rounded px-3 py-2" type="password" placeholder="Confirmar Contraseña" />
              </div>
              <div className="mt-4">
                <p className="font-medium mb-2">Permisos Iniciales</p>
                <div className="grid grid-cols-3 gap-2">
                  {permisosDisponibles.map((perm, i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input type="checkbox" onChange={() => togglePermiso(perm)} />
                      {perm}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button onClick={() => setModalUsuario(false)} className="px-4 py-2 bg-gray-200 rounded">Cancelar</button>
                <button className="px-4 py-2 bg-gray-900 text-white rounded">Crear Usuario</button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
export default AdminPermisos;