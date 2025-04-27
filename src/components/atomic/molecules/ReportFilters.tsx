import { useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

export const ReportFilters = () => {
  const [showFilters, setShowFilters] = useState(false); // Estado para mostrar/ocultar filtros
  const [startDate, setStartDate] = useState(""); // Fecha de inicio
  const [endDate, setEndDate] = useState(""); // Fecha de fin

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Alternar visibilidad de los filtros adicionales
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Filtro de tipo de reporte */}
      <select className="border px-3 py-2 rounded-lg">
        <option>Entradas de Inventario</option>
        <option>Productos por Categoría</option>
        <option>Resumen por Bodega</option>
      </select>

      {/* Filtro de bodegas */}
      <select className="border px-3 py-2 rounded-lg">
        <option>Todas las bodegas</option>
        <option>Tic</option>
        <option>Gastronomia</option>
        <option>Agropecuaria</option>
        <option>Escuela nacional del cafe</option>
      </select>

      {/* Filtro de categoría de producto */}
      <select className="border px-3 py-2 rounded-lg">
        <option>Todas las categorías</option>
        <option>Audio</option>
        <option>Fotografía</option>
        <option>Computación</option>
        <option>Audiovisual</option>
        <option>Electrónica</option>
      </select>

      {/* Barra de búsqueda */}
      <input
        type="text"
        className="border px-3 py-2 rounded-lg md:col-span-1"
        placeholder="Buscar producto"
      />

      {/* Filtros adicionales */}
      {showFilters && (
        <div className="flex flex-col gap-4 mt-4 col-span-full">
          {/* Selección de fechas */}
          <div className="flex gap-4">
            <input
              type="date"
              className="border px-3 py-2 rounded-lg"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Fecha de inicio"
            />
            <input
              type="date"
              className="border px-3 py-2 rounded-lg"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="Fecha de fin"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between col-span-full">
        {/* Botón de filtros */}
        <button
          className="flex items-center gap-1 border px-4 py-2 rounded-lg text-sm text-gray-700"
          onClick={toggleFilters} // Mostrar/ocultar filtros
        >
          <FunnelIcon className="h-4 w-4" /> Filtros
        </button>

        {/* Botón para generar reporte */}
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:shadow">
          Generar Reporte de Entradas
        </button>
      </div>
    </div>
  );
};
