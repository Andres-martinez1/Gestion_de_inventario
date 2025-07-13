import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useBodegas } from "../../../hooks/Bodegas/useBodegas";
import { GetBodega } from "../../../types/Bodegas/GetBodega";
import { useSedes } from "../../../hooks/Sedes/useSedes";

function TablaBodegas() {
  const { bodegas = [], crearBodega, actualizarBodega, eliminarBodega } = useBodegas();
  const { sedes = [] } = useSedes();

  const [formData, setFormData] = useState({
    encargado: "",
    nombreBodega: "",
    fkIdSede: "",
  });

  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      encargado: formData.encargado,
      nombreBodega: formData.nombreBodega,
      fkIdSede: Number(formData.fkIdSede),
    };

    if (editId !== null) {
      actualizarBodega.mutate({ id: editId, data: payload });
    } else {
      crearBodega.mutate(payload);
    }

    setFormData({ encargado: "", nombreBodega: "", fkIdSede: "" });
    setEditId(null);
  };

  const handleEdit = (bodega: GetBodega) => {
    setFormData({
      encargado: bodega.encargado,
      nombreBodega: bodega.nombreBodega,
      fkIdSede: bodega.fkIdSede?.idSedes.toString() || "",
    });
    setEditId(bodega.idBodega);
  };

  const handleCancelEdit = () => {
    setFormData({ encargado: "", nombreBodega: "", fkIdSede: "" });
    setEditId(null);
  };

  const filteredBodegas = bodegas.filter((b) =>
    b.nombreBodega.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestión de Bodegas</h2>
        <input
          type="text"
          placeholder="Buscar por nombre de bodega"
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
            <label className="block text-sm font-medium mb-1">Encargado</label>
            <input
              name="encargado"
              value={formData.encargado}
              onChange={handleChange}
              placeholder="Encargado"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nombre de la Bodega</label>
            <input
              name="nombreBodega"
              value={formData.nombreBodega}
              onChange={handleChange}
              placeholder="Nombre de la Bodega"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sede</label>
            <select
              name="fkIdSede"
              value={formData.fkIdSede}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar sede</option>
              {sedes.map((sede) => (
                <option key={sede.idSedes} value={sede.idSedes}>
                  {sede.nombreSede}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-right space-x-2">
          {editId !== null && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-[5px] hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {editId !== null ? "Actualizar Bodega" : "Crear Bodega"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Encargado</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Sede</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredBodegas.length > 0 ? (
              filteredBodegas.map((bodega) => (
                <tr key={bodega.idBodega} className="hover:bg-gray-100">
                  <td className="px-4 py-3">{bodega.idBodega}</td>
                  <td className="px-4 py-3">{bodega.encargado}</td>
                  <td className="px-4 py-3">{bodega.nombreBodega}</td>
                  <td className="px-4 py-3">{bodega.fkIdSede?.nombreSede ?? "Sin sede"}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(bodega)}
                    />
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarBodega.mutate(bodega.idBodega)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No hay bodegas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaBodegas;
