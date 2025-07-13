import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useUsuarios } from "../../../hooks/Usuarios/useUsuarios";
import { useAreas } from "../../../hooks/Areas/useAreas";
import { useRol } from "../../../hooks/Roles/useRoles";
import { GetUsuario } from "../../../types/Usuarios/GetUsuario";

function TablaUsuarios() {
  const { usuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = useUsuarios();
  const { areas = [] } = useAreas();
  const { roles = [] } = useRol();

  const [formData, setFormData] = useState<Partial<GetUsuario>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes("fkId") || name === "identificacion" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      identificacion: Number(formData.identificacion),
      nombres: formData.nombres || "",
      apellidos: formData.apellidos || "",
      correo: formData.correo || "",
      password: formData.password || "",
      fkIdArea:
        formData.fkIdArea && typeof formData.fkIdArea === "object"
          ? formData.fkIdArea.idArea
          : formData.fkIdArea ?? null,
      fkIdRol:
        formData.fkIdRol && typeof formData.fkIdRol === "object"
          ? formData.fkIdRol.idRol
          : formData.fkIdRol ?? null,
    };

    if (isEdit && formData.idUsuario) {
      actualizarUsuario.mutate({ id: formData.idUsuario, data: payload });
    } else {
      crearUsuario.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (usuario: GetUsuario) => {
    setFormData({
      ...usuario,
      fkIdArea:
        usuario.fkIdArea && typeof usuario.fkIdArea === "object"
          ? usuario.fkIdArea.idArea
          : usuario.fkIdArea,
      fkIdRol:
        usuario.fkIdRol && typeof usuario.fkIdRol === "object"
          ? usuario.fkIdRol.idRol
          : usuario.fkIdRol,
    });
    setIsEdit(true);
  };

  const filtered = usuarios.filter(
    (u) =>
      u.nombres.toLowerCase().includes(search.toLowerCase()) ||
      u.apellidos.toLowerCase().includes(search.toLowerCase()) ||
      u.correo.toLowerCase().includes(search.toLowerCase()) ||
      u.identificacion.toString().includes(search)
  );

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Usuarios</h2>
        <input
          type="text"
          placeholder="Buscar usuario..."
          className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            name="identificacion"
            type="number"
            value={formData.identificacion || ""}
            onChange={handleChange}
            placeholder="Identificación"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="nombres"
            value={formData.nombres || ""}
            onChange={handleChange}
            placeholder="Nombres"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="apellidos"
            value={formData.apellidos || ""}
            onChange={handleChange}
            placeholder="Apellidos"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="correo"
            value={formData.correo || ""}
            onChange={handleChange}
            placeholder="Correo"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="password"
            type="password"
            value={formData.password || ""}
            onChange={handleChange}
            placeholder="Contraseña"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required={!isEdit}
          />
          <select
            name="fkIdArea"
            value={typeof formData.fkIdArea === 'number' ? formData.fkIdArea : ''}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccione un área</option>
            {areas.map((area) => (
              <option key={area.idArea} value={area.idArea}>
                {area.nombreArea}
              </option>
            ))}
          </select>
          <select
            name="fkIdRol"
            value={typeof formData.fkIdRol === 'number' ? formData.fkIdRol : ''}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccione un rol</option>
            {roles.map((rol) => (
              <option key={rol.idRol} value={rol.idRol}>
                {rol.nombreRol}
              </option>
            ))}
          </select>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Usuario" : "Crear Usuario"}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Identificación</th>
              <th className="px-4 py-3">Nombre completo</th>
              <th className="px-4 py-3">Correo</th>
              <th className="px-4 py-3">Área</th>
              <th className="px-4 py-3">Rol</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((usuario) => (
              <tr key={usuario.idUsuario} className="hover:bg-gray-100">
                <td className="px-4 py-2">{usuario.idUsuario}</td>
                <td className="px-4 py-2">{usuario.identificacion}</td>
                <td className="px-4 py-2">
                  {usuario.nombres} {usuario.apellidos}
                </td>
                <td className="px-4 py-2">{usuario.correo}</td>
                <td className="px-4 py-2">
                  {typeof usuario.fkIdArea === "object" ? usuario.fkIdArea?.nombreArea : "—"}
                </td>
                <td className="px-4 py-2">
                  {typeof usuario.fkIdRol === "object" ? usuario.fkIdRol?.nombreRol : "—"}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(usuario)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarUsuario.mutate(usuario.idUsuario)}
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
                <td colSpan={7} className="px-4 py-4 text-center text-gray-500">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaUsuarios;
