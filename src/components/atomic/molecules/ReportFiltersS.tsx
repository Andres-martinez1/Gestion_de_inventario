import { FunnelIcon } from "@heroicons/react/24/outline";

export const ReportFiltersS = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <select className="border px-3 py-2 rounded-lg">
        <option>Inventario Consolidado</option>
        <option>Productos por Categoría</option>
        <option>Resumen por Bodega</option>
      </select>
      <select className="border px-3 py-2 rounded-lg">
        <option>Todas las bodegas</option>
        <option>Tic</option>
        <option>Gastronomia</option>
        <option>Agropecuaria</option>
        <option>Escuela Nacional del Café</option>
        <option>Agrícola
        </option>
      </select>
      <input type="text" className="border px-3 py-2 rounded-lg" placeholder="Buscar" />
      <input type="text" className="border px-3 py-2 rounded-lg md:col-span-1" placeholder="01/01/2023 - 19/04/2025" />
      <div className="flex items-center justify-between col-span-full">
        <button className="flex items-center gap-1 border px-4 py-2 rounded-lg text-sm text-gray-700">
          <FunnelIcon className="h-4 w-4" /> Filtros
        </button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:shadow">
          Generar Reporte Global
        </button>
      </div>
    </div>
  );
};
