import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEntregaMaterial } from "../../../hooks/Entrega_material/useEntrega_material";
import { GetEntregaMaterial } from "../../../types/Entrega_material/GetEntrega_material";

function TablaEntregaMaterial() {
  const {
    entregasMaterial,
    crearEntregaMaterial,
    actualizarEntregaMaterial,
    eliminarEntregaMaterial,
  } = useEntregaMaterial();

  const [formData, setFormData] = useState<{
    fechaEntrega?: string;
    idSolicitud?: number;
    idUsuarioResponsable?: number;
    idEntrega?: number;
  }>({});

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "idSolicitud" || name === "idUsuarioResponsable"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      fechaEntrega: formData.fechaEntrega
        ? new Date(formData.fechaEntrega)
        : new Date(),
      idSolicitud: formData.idSolicitud || 0,
      idUsuarioResponsable: formData.idUsuarioResponsable || 0,
    };

    if (isEdit && formData.idEntrega) {
      actualizarEntregaMaterial.mutate({ id: formData.idEntrega, data: payload });
    } else {
      crearEntregaMaterial.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (entrega: GetEntregaMaterial) => {
    setFormData({
      idEntrega: entrega.idEntrega,
      fechaEntrega: new Date(entrega.fechaEntrega).toISOString().split("T")[0],
      idSolicitud: entrega.idSolicitud,
      idUsuarioResponsable: entrega.idUsuarioResponsable,
    });
    setIsEdit(true);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Entregas de Material</h2>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="date"
            name="fechaEntrega"
            value={formData.fechaEntrega || ""}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="idSolicitud"
            value={formData.idSolicitud ?? ""}
            onChange={handleChange}
            placeholder="ID Solicitud"
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="idUsuarioResponsable"
            value={formData.idUsuarioResponsable ?? ""}
            onChange={handleChange}
            placeholder="ID Usuario Responsable"
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Entrega" : "Crear Entrega"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Fecha Entrega</th>
              <th className="px-4 py-3">ID Solicitud</th>
              <th className="px-4 py-3">ID Responsable</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {entregasMaterial.map((entrega) => (
              <tr key={entrega.idEntrega} className="hover:bg-gray-100">
                <td className="px-4 py-2">{entrega.idEntrega}</td>
                <td className="px-4 py-2">
                  {new Date(entrega.fechaEntrega).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{entrega.idSolicitud}</td>
                <td className="px-4 py-2">{entrega.idUsuarioResponsable}</td>
                <td className="px-4 py-2 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(entrega)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarEntregaMaterial.mutate(entrega.idEntrega)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {entregasMaterial.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                  No hay entregas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaEntregaMaterial;
