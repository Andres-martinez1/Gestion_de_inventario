import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useAreas } from "../../../hooks/Areas/useAreas";
import { GetArea } from "../../../types/Areas/GetArea";

function TablaAreas() {
  const { areas, crearArea, actualizarArea, eliminarArea } = useAreas();

  const [formData, setFormData] = useState<Partial<GetArea>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    nombreArea: formData.nombreArea || "",
  };

  if (isEdit && formData.idArea) {
    actualizarArea.mutate({ id: formData.idArea, data: payload });
  } else {
    crearArea.mutate(payload);
  }

  setFormData({});
  setIsEdit(false);
};


  const handleEdit = (area: GetArea) => {
    setFormData(area);
    setIsEdit(true);
  };

 const filteredAreas = areas.filter((area) =>
  area.nombreArea.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">
          Gestión de Áreas Formativas
        </h2>
        <input
          type="text"
          placeholder="Buscar por nombre de área"
          className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5  border border-gray-200"
      >
        <div>
          <label className="block text-sm font-medium mb-5">
            Nombre del Área
          </label>
          <input
            name="nombreArea"
            value={formData.nombreArea || ""}
            onChange={handleChange}
            placeholder="Ej: TICC, Productiva..."
            className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Área" : "Crear Área"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-5">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredAreas.map((area) => (
              <tr key={area.idArea} className="hover:bg-gray-200">
                <td className="px-4 py-3">{area.idArea}</td>
                <td className="px-4 py-3">{area.nombreArea}</td>
                <td className="px-4 py-3 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(area)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarArea.mutate(area.idArea)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filteredAreas.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                  No hay áreas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaAreas;
