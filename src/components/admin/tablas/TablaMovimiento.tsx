import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMovimiento } from "../../../hooks/Movimientos/useMovimientos";
import { useElementos } from "../../../hooks/Elementos/useElementos";
import { useUsuarios } from "../../../hooks/Usuarios/useUsuarios";
import { GetMovimiento } from "../../../types/Movimientos/GetMovimiento";

function TablaMovimiento() {
  const {
    movimientos,
    crearMovimiento,
    actualizarMovimiento,
    eliminarMovimiento,
  } = useMovimiento();

  const { data: elementos = [] } = useElementos();
  const { usuarios = [] } = useUsuarios();

  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      fecha: new Date(formData.fecha),
      responsable: formData.responsable || "",
      pedir: formData.pedir || "",
      suministrar: formData.suministrar || "",
      devolver: formData.devolver || "",
      fkIdElemento: Number(formData.fkIdElemento),
      fkIdUsuario: Number(formData.fkIdUsuario),
    };

    if (isEdit && formData.idMovimientos) {
      actualizarMovimiento.mutate({ id: formData.idMovimientos, data: payload });
    } else {
      crearMovimiento.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (mov: GetMovimiento) => {
    setFormData({
      ...mov,
      fecha: new Date(mov.fecha).toISOString().split("T")[0],
      fkIdElemento: mov.fkIdElemento?.idElemento.toString(),
      fkIdUsuario: mov.fkIdUsuario?.idUsuario.toString(),
    });
    setIsEdit(true);
  };

  const filteredMovimientos = movimientos.filter((m) =>
    m.responsable.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Movimientos</h2>
        <input
          type="text"
          placeholder="Buscar por responsable"
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
            <label className="block text-sm font-medium mb-1">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha || ""}
              onChange={handleChange}
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Responsable</label>
            <input
              name="responsable"
              value={formData.responsable || ""}
              onChange={handleChange}
              placeholder="Responsable"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pedir</label>
            <input
              name="pedir"
              value={formData.pedir || ""}
              onChange={handleChange}
              placeholder="Pedir"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Suministrar</label>
            <input
              name="suministrar"
              value={formData.suministrar || ""}
              onChange={handleChange}
              placeholder="Suministrar"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Devolver</label>
            <input
              name="devolver"
              value={formData.devolver || ""}
              onChange={handleChange}
              placeholder="Devolver"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Elemento</label>
            <select
              name="fkIdElemento"
              value={formData.fkIdElemento || ""}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar elemento</option>
              {elementos.map((e) => (
                <option key={e.idElemento} value={e.idElemento}>
                  {e.nombreElemento}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Usuario</label>
            <select
              name="fkIdUsuario"
              value={formData.fkIdUsuario || ""}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar usuario</option>
              {usuarios.map((u: any) => (
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
            {isEdit ? "Actualizar Movimiento" : "Crear Movimiento"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Responsable</th>
              <th className="px-4 py-3">Elemento</th>
              <th className="px-4 py-3">Usuario</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovimientos.map((mov) => (
              <tr key={mov.idMovimientos} className="hover:bg-gray-200">
                <td className="px-4 py-3">{mov.idMovimientos}</td>
                <td className="px-4 py-3">
                  {new Date(mov.fecha).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">{mov.responsable}</td>
                <td className="px-4 py-3">{mov.fkIdElemento?.nombreElemento || "Sin elemento"}</td>
                <td className="px-4 py-3">
                  {mov.fkIdUsuario?.nombres
                    ? `${mov.fkIdUsuario.nombres} ${mov.fkIdUsuario.apellidos}`
                    : "Sin usuario"}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(mov)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarMovimiento.mutate(mov.idMovimientos)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filteredMovimientos.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                  No hay movimientos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaMovimiento;
