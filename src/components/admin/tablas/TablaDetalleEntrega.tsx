import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDetalleEntrega } from "../../../hooks/Detalles_entrega/useDetalles_entrega";
import { GetDetalleEntrega } from "../../../types/Detalles_entrega/GetDetalles_entrega";

function TablaDetalleEntrega() {
  const {
    detalleEntrega = [],
    crearDetalleEntrega,
    actualizarDetalleEntrega,
    eliminarDetalleEntrega,
  } = useDetalleEntrega();

  const [formData, setFormData] = useState<Partial<GetDetalleEntrega>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      vistoBuenoAprendiz: Boolean(formData.vistoBuenoAprendiz),
      idEntrega: Number(formData.idEntrega),
      idFichaFormacion: Number(formData.idFichaFormacion),
      idInstructorReceptor: Number(formData.idInstructorReceptor),
    };

    if (isEdit && formData.idDetalleEntrega) {
      actualizarDetalleEntrega.mutate({
        id: formData.idDetalleEntrega,
        data: payload,
      });
    } else {
      crearDetalleEntrega.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (detalle: GetDetalleEntrega) => {
    setFormData(detalle);
    setIsEdit(true);
  };

  const filteredDetalles = detalleEntrega.filter((detalle) =>
    detalle.idEntrega.toString().includes(search) ||
    detalle.idFichaFormacion.toString().includes(search) ||
    detalle.idInstructorReceptor.toString().includes(search)
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Detalles de Entrega</h2>
        <input
          type="text"
          placeholder="Buscar por ID Entrega, Ficha o Instructor"
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
          <label className="flex items-center gap-2 col-span-1 sm:col-span-1">
            <input
              type="checkbox"
              name="vistoBuenoAprendiz"
              checked={formData.vistoBuenoAprendiz || false}
              onChange={handleChange}
              className="accent-blue-600 w-5 h-5"
            />
            <span className="text-sm">Visto Bueno Aprendiz</span>
          </label>
          <input
            name="idEntrega"
            value={formData.idEntrega ?? ""}
            onChange={handleChange}
            placeholder="ID Entrega"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="idFichaFormacion"
            value={formData.idFichaFormacion ?? ""}
            onChange={handleChange}
            placeholder="ID Ficha Formación"
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="idInstructorReceptor"
            value={formData.idInstructorReceptor ?? ""}
            onChange={handleChange}
            placeholder="ID Instructor Receptor"
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
              <th className="px-4 py-3">Visto Bueno</th>
              <th className="px-4 py-3">ID Entrega</th>
              <th className="px-4 py-3">ID Ficha</th>
              <th className="px-4 py-3">ID Instructor</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetalles.map((detalle) => (
              <tr key={detalle.idDetalleEntrega} className="hover:bg-gray-100">
                <td className="px-4 py-2">{detalle.idDetalleEntrega}</td>
                <td className="px-4 py-2">
                  {detalle.vistoBuenoAprendiz ? "Sí" : "No"}
                </td>
                <td className="px-4 py-2">{detalle.idEntrega}</td>
                <td className="px-4 py-2">{detalle.idFichaFormacion}</td>
                <td className="px-4 py-2">{detalle.idInstructorReceptor}</td>
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
                      onClick={() =>
                        eliminarDetalleEntrega.mutate(detalle.idDetalleEntrega)
                      }
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
                  No hay registros disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaDetalleEntrega;
