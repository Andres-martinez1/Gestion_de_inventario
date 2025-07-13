import { useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

interface FilterValues {
  reportType: string;
  bodega: string;
  categoria: string;
  search: string;
  startDate: string;
  endDate: string;
}

interface ReportFiltersProps {
  onFilterChange: (filters: FilterValues) => void;
}

export const ReportFilters = ({ onFilterChange }: ReportFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [reportType, setReportType] = useState("Entradas de Inventario");
  const [bodega, setBodega] = useState("Todas");
  const [categoria, setCategoria] = useState("Todas");
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleGenerateReport = () => {
    onFilterChange({
      reportType,
      bodega,
      categoria,
      search,
      startDate,
      endDate,
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Tipo de reporte */}
      <select
        className="border px-3 py-2 rounded-lg"
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
      >
        <option>Entradas de Inventario</option>
        <option>Productos por Categoría</option>
        <option>Resumen por Bodega</option>
      </select>

      {/* Bodega */}
      <select
        className="border px-3 py-2 rounded-lg"
        value={bodega}
        onChange={(e) => setBodega(e.target.value)}
      >
        <option value="Todas">Todas las bodegas</option>
        <option value="Tic">Tic</option>
        <option value="Gastronomia">Gastronomía</option>
        <option value="Agropecuaria">Agropecuaria</option>
        <option value="Escuela nacional del cafe">Escuela Nacional del Café</option>
      </select>

      {/* Categoría */}
      <select
        className="border px-3 py-2 rounded-lg"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="Todas">Todas las categorías</option>
        <option value="Audio">Audio</option>
        <option value="Fotografía">Fotografía</option>
        <option value="Computación">Computación</option>
        <option value="Audiovisual">Audiovisual</option>
        <option value="Electrónica">Electrónica</option>
      </select>

      {/* Buscar producto */}
      <input
        type="text"
        className="border px-3 py-2 rounded-lg"
        placeholder="Buscar producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtros adicionales */}
      {showFilters && (
        <div className="flex flex-col gap-4 mt-2 col-span-full md:col-span-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              className="border px-3 py-2 rounded-lg w-full sm:w-auto"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="border px-3 py-2 rounded-lg w-full sm:w-auto"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Botones */}
      <div className="flex items-center justify-between col-span-full mt-2">
        <button
          className="flex items-center gap-1 border px-4 py-2 rounded-lg text-sm text-gray-700"
          onClick={toggleFilters}
        >
          <FunnelIcon className="h-4 w-4" /> Filtros Avanzados
        </button>

        <button
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:shadow"
          onClick={handleGenerateReport}
        >
          Generar Reporte
        </button>
      </div>
    </div>
  );
};
