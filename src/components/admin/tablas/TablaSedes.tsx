import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSedes } from "../../../hooks/Sedes/useSedes";
import { useCentros } from "../../../hooks/Centros/useCentros";
import { GetSede } from "../../../types/Sedes/GetSede";

function TablaSedes() {
  const { sedes, crearSede, actualizarSede, eliminarSede } = useSedes();
  const { centros = [] } = useCentros();

  const [formData, setFormData] = useState<Partial<GetSede>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name.includes("fkId") ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      nombreSede: formData.nombreSede || "",
      fkIdCentro: Number(formData.fkIdCentro),
    };

    if (isEdit && formData.idSedes) {
      actualizarSede.mutate({ id: formData.idSedes, data: payload });
    } else {
      crearSede.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (sede: GetSede) => {
    setFormData(sede);
    setIsEdit(true);
  };

  const filteredSedes = sedes.filter((s) =>
    s.nombreSede.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Sedes</h2>
        <input
          type="text"
          placeholder="Buscar sede"
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
            <label className="block text-sm font-medium mb-1">Nombre de la Sede</label>
            <input
              name="nombreSede"
              value={formData.nombreSede || ""}
              onChange={handleChange}
              placeholder="Nombre de la Sede"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Centro</label>
            <select
              name="fkIdCentro"
              value={formData.fkIdCentro || ""}
              onChange={handleChange}
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione un centro</option>
              {centros.map((centro) => (
                <option key={centro.idCentro} value={centro.idCentro}>
                  {centro.nombreCentro}
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
            {isEdit ? "Actualizar Sede" : "Crear Sede"}
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
              <th className="px-4 py-3">Centro</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredSedes.map((sede) => (
              <tr key={sede.idSedes} className="hover:bg-gray-200">
                <td className="px-4 py-3">{sede.idSedes}</td>
                <td className="px-4 py-3">{sede.nombreSede}</td>
                <td className="px-4 py-3">
                  {sede.fkIdCentro || sede.fkIdCentro}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(sede)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarSede.mutate(sede.idSedes)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filteredSedes.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                  No hay sedes registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaSedes;
