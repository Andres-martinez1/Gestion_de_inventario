import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMunicipios } from "../../../hooks/Municipios/useMunicipios";
import { GetMunicipio } from "../../../types/Municipios/GetMunicipio";

const ITEMS_PER_PAGE = 4;

function TablaMunicipios() {
  const {
    municipios = [],
    crearMunicipio,
    actualizarMunicipio,
    eliminarMunicipio,
  } = useMunicipios();

  const [formData, setFormData] = useState<Partial<GetMunicipio>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      nombreMunicipio: formData.nombreMunicipio || "",
    };

    if (isEdit && formData.idMunicipio) {
      actualizarMunicipio.mutate({ id: formData.idMunicipio, data: payload });
    } else {
      crearMunicipio.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (municipio: GetMunicipio) => {
    setFormData(municipio);
    setIsEdit(true);
  };

  const filteredMunicipios = municipios.filter((m) =>
    m.nombreMunicipio.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMunicipios.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMunicipios = filteredMunicipios.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 space-y-6 max-h-[90vh] overflow-y-auto">
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Municipios</h2>
        <input
          type="text"
          placeholder="Buscar municipio"
          className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="nombreMunicipio"
            value={formData.nombreMunicipio || ""}
            onChange={handleChange}
            placeholder="Nombre del Municipio"
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Municipio" : "Crear Municipio"}
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
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentMunicipios.map((municipio) => (
              <tr key={municipio.idMunicipio} className="hover:bg-gray-100">
                <td className="px-4 py-2">{municipio.idMunicipio}</td>
                <td className="px-4 py-2">{municipio.nombreMunicipio}</td>
                <td className="px-4 py-2 flex gap-2">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(municipio)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarMunicipio.mutate(municipio.idMunicipio)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {currentMunicipios.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                  No hay municipios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default TablaMunicipios;
