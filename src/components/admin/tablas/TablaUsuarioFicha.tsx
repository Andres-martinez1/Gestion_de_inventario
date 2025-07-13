import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useUsuarioFicha } from "../../../hooks/Usuario_ficha/useUsuario_ficha";
import { GetUsuarioFicha } from "../../../types/Usuario_ficha/GetUsuario_ficha";

function TablaUsuarioFicha() {
  const {
    usuarioFicha,
    crearUsuarioFicha,
    actualizarUsuarioFicha,
    eliminarUsuarioFicha,
  } = useUsuarioFicha();

  const [formData, setFormData] = useState<Partial<GetUsuarioFicha>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      fkIdFicha: Number(formData.fkIdFicha),
      fkIdUsuario: Number(formData.fkIdUsuario),
    };

    if (isEdit && formData.id) {
      actualizarUsuarioFicha.mutate({ id: formData.id, data: payload });
    } else {
      crearUsuarioFicha.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (relacion: GetUsuarioFicha) => {
    setFormData(relacion);
    setIsEdit(true);
  };

  const filtered = usuarioFicha.filter(
    (rel) =>
      rel.fkIdFicha.toString().includes(search) ||
      rel.fkIdUsuario.toString().includes(search)
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header con buscador */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Usuarios por Ficha</h2>
        <input
          type="text"
          placeholder="Buscar por ID Usuario o Ficha"
          className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">ID Ficha</label>
            <input
              name="fkIdFicha"
              type="number"
              value={formData.fkIdFicha || ""}
              onChange={handleChange}
              placeholder="ID Ficha"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">ID Usuario</label>
            <input
              name="fkIdUsuario"
              type="number"
              value={formData.fkIdUsuario || ""}
              onChange={handleChange}
              placeholder="ID Usuario"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Relación" : "Crear Relación"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">ID Ficha</th>
              <th className="px-4 py-3">ID Usuario</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((rel) => (
              <tr key={rel.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{rel.id}</td>
                <td className="px-4 py-2">{rel.fkIdFicha}</td>
                <td className="px-4 py-2">{rel.fkIdUsuario}</td>
                <td className="px-4 py-2 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(rel)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarUsuarioFicha.mutate(rel.id)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                  No hay relaciones registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaUsuarioFicha;
