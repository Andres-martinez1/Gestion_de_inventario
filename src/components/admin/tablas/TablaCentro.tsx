import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCentros } from "../../../hooks/Centros/useCentros";
import { useMunicipios } from "../../../hooks/Municipios/useMunicipios";
import { GetCentro } from "../../../types/Centros/GetCentro";

function TablaCentro() {
  const { centros = [], crearCentro, actualizarCentro, eliminarCentro } = useCentros();
  const { municipios = [] } = useMunicipios();

  const [formData, setFormData] = useState({
    nombreCentro: "",
    fkIdMunicipio: "",
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
      nombreCentro: formData.nombreCentro,
      fkIdMunicipio: Number(formData.fkIdMunicipio),
    };

    if (editId !== null) {
      actualizarCentro.mutate({ id: editId, data: payload });
    } else {
      crearCentro.mutate(payload);
    }

    setFormData({ nombreCentro: "", fkIdMunicipio: "" });
    setEditId(null);
  };

  const handleEdit = (centro: GetCentro) => {
    setFormData({
      nombreCentro: centro.nombreCentro,
      fkIdMunicipio: centro.fkIdMunicipio?.idMunicipio.toString() || "",
    });
    setEditId(centro.idCentro);
  };

  const handleCancelEdit = () => {
    setFormData({ nombreCentro: "", fkIdMunicipio: "" });
    setEditId(null);
  };

  const filteredCentros = centros.filter((centro) =>
    centro.nombreCentro.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestión de Centros</h2>
        <input
          type="text"
          placeholder="Buscar por nombre del centro"
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
            <label className="block text-sm font-medium mb-1">Nombre del Centro</label>
            <input
              name="nombreCentro"
              value={formData.nombreCentro}
              onChange={handleChange}
              placeholder="Nombre del Centro"
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Municipio</label>
            <select
              name="fkIdMunicipio"
              value={formData.fkIdMunicipio}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar municipio</option>
              {municipios.map((m) => (
                <option key={m.idMunicipio} value={m.idMunicipio}>
                  {m.nombreMunicipio}
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
            {editId !== null ? "Actualizar Centro" : "Crear Centro"}
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
              <th className="px-4 py-3">Municipio</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredCentros.length > 0 ? (
              filteredCentros.map((centro) => (
                <tr key={centro.idCentro} className="hover:bg-gray-100">
                  <td className="px-4 py-3">{centro.idCentro}</td>
                  <td className="px-4 py-3">{centro.nombreCentro}</td>
                  <td className="px-4 py-3">
                    {centro.fkIdMunicipio?.nombreMunicipio ?? "Sin municipio"}
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(centro)}
                    />
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarCentro.mutate(centro.idCentro)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                  No hay centros registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaCentro;
