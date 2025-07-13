import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDetalles } from "../../../hooks/Detalles/useDetalles";
import { GetDetalle } from "../../../types/Detalles/GetDetalle";

function TablaDetalles() {
  const {
    detalles = [],
    crearDetalle,
    actualizarDetalle,
    eliminarDetalle,
  } = useDetalles();

  const [formData, setFormData] = useState<Partial<GetDetalle>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      movimiento: formData.movimiento || "",
      asignado: formData.asignado || "",
      estado: formData.estado || "",
      retorno: formData.retorno || "",
      fecha: new Date(formData.fecha || new Date()),
      fkIdElemento: Number(formData.fkIdElemento),
      fkIdFicha: Number(formData.fkIdFicha),
      idSolicitud: Number(formData.idSolicitud),
    };

    if (isEdit && formData.id) {
      actualizarDetalle.mutate({ id: formData.id, data: payload });
    } else {
      crearDetalle.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (detalle: GetDetalle) => {
    setFormData(detalle);
    setIsEdit(true);
  };

  const filteredDetalles = Array.isArray(detalles)
    ? detalles.filter((detalle) =>
        detalle.movimiento.toLowerCase().includes(search.toLowerCase()) ||
        detalle.asignado.toLowerCase().includes(search.toLowerCase()) ||
        detalle.estado.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Detalles</h2>
        <input
          type="text"
          placeholder="Buscar por Movimiento, Asignado o Estado"
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <input
            name="movimiento"
            value={formData.movimiento || ""}
            onChange={handleChange}
            placeholder="Movimiento"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="asignado"
            value={formData.asignado || ""}
            onChange={handleChange}
            placeholder="Asignado"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="estado"
            value={formData.estado || ""}
            onChange={handleChange}
            placeholder="Estado"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="retorno"
            value={formData.retorno || ""}
            onChange={handleChange}
            placeholder="Retorno"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="fecha"
            type="date"
            value={
              formData.fecha
                ? new Date(formData.fecha).toISOString().substring(0, 10)
                : ""
            }
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="fkIdElemento"
            type="number"
            value={formData.fkIdElemento || ""}
            onChange={handleChange}
            placeholder="ID Elemento"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="fkIdFicha"
            type="number"
            value={formData.fkIdFicha || ""}
            onChange={handleChange}
            placeholder="ID Ficha"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="idSolicitud"
            type="number"
            value={formData.idSolicitud || ""}
            onChange={handleChange}
            placeholder="ID Solicitud"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Detalle" : "Crear Detalle"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Movimiento</th>
              <th className="px-4 py-3">Asignado</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Retorno</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">ID Elemento</th>
              <th className="px-4 py-3">ID Ficha</th>
              <th className="px-4 py-3">ID Solicitud</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetalles.map((detalle) => (
              <tr key={detalle.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{detalle.id}</td>
                <td className="px-4 py-2">{detalle.movimiento}</td>
                <td className="px-4 py-2">{detalle.asignado}</td>
                <td className="px-4 py-2">{detalle.estado}</td>
                <td className="px-4 py-2">{detalle.retorno}</td>
                <td className="px-4 py-2">
                  {new Date(detalle.fecha).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{detalle.fkIdElemento}</td>
                <td className="px-4 py-2">{detalle.fkIdFicha}</td>
                <td className="px-4 py-2">{detalle.idSolicitud}</td>
                <td className="px-4 py-2 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(detalle)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarDetalle.mutate(detalle.id)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filteredDetalles.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-4 text-center text-gray-500">
                  No hay detalles registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaDetalles;
