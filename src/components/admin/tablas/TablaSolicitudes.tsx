import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSolicitudes } from "../../../hooks/Solicitudes/useSolicitudes";
import { useUsuarios } from "../../../hooks/Usuarios/useUsuarios";
import { GetSolicitud } from "../../../types/Solicitudes/GetSolicitudes";
import { GetUsuario } from "../../../types/Usuarios/GetUsuario";

function TablaSolicitudes() {
  const {
    solicitudes = [],
    crearSolicitud,
    actualizarSolicitud,
    eliminarSolicitud,
  } = useSolicitudes();
  const { usuarios = [] } = useUsuarios();

  const [formData, setFormData] = useState<
    Partial<GetSolicitud & { idUsuarioSolicitante: number }>
  >({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "idUsuarioSolicitante" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fechaSolicitud) return;

    const payload = {
      estadoSolicitud: formData.estadoSolicitud || "",
      fechaSolicitud: new Date(formData.fechaSolicitud),
      idUsuarioSolicitante: Number(formData.idUsuarioSolicitante),
    };

    if (isEdit && formData.idSolicitud) {
      actualizarSolicitud.mutate({ id: formData.idSolicitud, data: payload });
    } else {
      crearSolicitud.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (solicitud: GetSolicitud) => {
    setFormData({
      ...solicitud,
      idUsuarioSolicitante:
        typeof solicitud.idUsuarioSolicitante === "object"
          ? solicitud.idUsuarioSolicitante
          : solicitud.idUsuarioSolicitante,
    });
    setIsEdit(true);
  };

  const filteredSolicitudes = solicitudes.filter((s) =>
    s.estadoSolicitud.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Solicitudes</h2>
        <input
          type="text"
          placeholder="Buscar por estado"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Estado</label>
            <input
              name="estadoSolicitud"
              value={formData.estadoSolicitud || ""}
              onChange={handleChange}
              placeholder="Estado de la Solicitud"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Fecha</label>
            <input
              name="fechaSolicitud"
              type="date"
              value={
                formData.fechaSolicitud
                  ? new Date(formData.fechaSolicitud).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Usuario Solicitante
            </label>
            <select
              name="idUsuarioSolicitante"
              value={formData.idUsuarioSolicitante || ""}
              onChange={handleChange}
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione un usuario</option>
              {usuarios.map((u: GetUsuario) => (
                <option key={u.idUsuario} value={u.idUsuario}>
                  {u.nombres} {u.apellidos}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Solicitud" : "Crear Solicitud"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Usuario Solicitante</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredSolicitudes.map((solicitud) => (
              <tr key={solicitud.idSolicitud} className="hover:bg-gray-100">
                <td className="px-4 py-3">{solicitud.idSolicitud}</td>
                <td className="px-4 py-3">{solicitud.estadoSolicitud}</td>
                <td className="px-4 py-3">
                  {new Date(solicitud.fechaSolicitud).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  {typeof solicitud.idUsuarioSolicitante === "object" &&
                  solicitud.idUsuarioSolicitante !== null
                    ? `${solicitud.idUsuarioSolicitante} ${solicitud.idUsuarioSolicitante}`
                    : "—"}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(solicitud)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() =>
                        eliminarSolicitud.mutate(solicitud.idSolicitud)
                      }
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filteredSolicitudes.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                  No hay solicitudes registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaSolicitudes;
