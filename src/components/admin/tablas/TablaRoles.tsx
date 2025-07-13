import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRol } from "../../../hooks/Roles/useRoles";
import { GetRol } from "../../../types/Roles/GetRoles";

function TablaRoles() {
  const {
    roles = [],
    crearRol,
    actualizarRol,
    eliminarRol,
  } = useRol();

  const [formData, setFormData] = useState<Partial<GetRol>>({});
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      nombreRol: formData.nombreRol || "",
    };

    if (isEdit && formData.idRol) {
      actualizarRol.mutate({ id: formData.idRol, data: payload });
    } else {
      crearRol.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (rol: GetRol) => {
    setFormData(rol);
    setIsEdit(true);
  };

  return (
    <div className="p-4 space-y-6 max-h-[90vh] overflow-y-auto">
      {/* Encabezado */}
      <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Roles</h2>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="nombreRol"
            value={formData.nombreRol || ""}
            onChange={handleChange}
            placeholder="Nombre del Rol"
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Rol" : "Crear Rol"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol) => (
              <tr key={rol.idRol} className="hover:bg-gray-100">
                <td className="px-4 py-2">{rol.idRol}</td>
                <td className="px-4 py-2">{rol.nombreRol}</td>
                <td className="px-4 py-2 flex gap-4">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(rol)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarRol.mutate(rol.idRol)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {roles.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                  No hay roles registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaRoles;
