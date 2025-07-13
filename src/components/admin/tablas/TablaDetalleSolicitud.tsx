import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDetalleSolicitud } from "../../../hooks/Detalle_solicitud/useDetalle_solicitud";
import { GetDetalleSolicitud } from "../../../types/Detalle_solicitud/GetDetalles._solicitud";

function TablaDetalleSolicitud() {
  const {
    detallesSolicitud = [],
    crearDetalleSolicitud,
    actualizarDetalleSolicitud,
    eliminarDetalleSolicitud,
  } = useDetalleSolicitud();

  const [formData, setFormData] = useState<Partial<GetDetalleSolicitud>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      cantidadSolicitada: formData.cantidadSolicitada || "",
      observaciones: formData.observaciones || "",
      idProducto: Number(formData.idProducto),
      idSolicitud: Number(formData.idSolicitud),
    };

    if (isEdit && formData.idDetalleSolicitud) {
      actualizarDetalleSolicitud.mutate({
        id: formData.idDetalleSolicitud,
        data: payload,
      });
    } else {
      crearDetalleSolicitud.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (detalle: GetDetalleSolicitud) => {
    setFormData(detalle);
    setIsEdit(true);
  };

  const filteredDetalles = detallesSolicitud.filter((detalle) =>
    detalle.observaciones.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Detalles Solicitud</h2>
        <input
          type="text"
          placeholder="Buscar por observaciones"
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
            name="cantidadSolicitada"
            value={formData.cantidadSolicitada || ""}
            onChange={handleChange}
            placeholder="Cantidad Solicitada"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="observaciones"
            value={formData.observaciones || ""}
            onChange={handleChange}
            placeholder="Observaciones"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="idProducto"
            type="number"
            value={formData.idProducto || ""}
            onChange={handleChange}
            placeholder="ID Producto"
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
              <th className="px-4 py-3">Cantidad</th>
              <th className="px-4 py-3">Observaciones</th>
              <th className="px-4 py-3">ID Producto</th>
              <th className="px-4 py-3">ID Solicitud</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetalles.map((detalle) => (
              <tr key={detalle.idDetalleSolicitud} className="hover:bg-gray-100">
                <td className="px-4 py-2">{detalle.idDetalleSolicitud}</td>
                <td className="px-4 py-2">{detalle.cantidadSolicitada}</td>
                <td className="px-4 py-2">{detalle.observaciones}</td>
                <td className="px-4 py-2">{detalle.idProducto}</td>
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
                      onClick={() => eliminarDetalleSolicitud.mutate(detalle.idDetalleSolicitud)}
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
                <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
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

export default TablaDetalleSolicitud;
