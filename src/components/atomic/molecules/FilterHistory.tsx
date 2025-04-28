import { FunnelIcon } from "@heroicons/react/24/outline";

export const FilterHistory = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <select className="border px-3 py-2 rounded-lg">
        <option>Tipo de Movimiento</option>
        <option>Entrada</option>
        <option>Salida</option>
        <option>Ajuste</option>
      </select>
      
      <input type="text" className="border px-3 py-2 rounded-lg" placeholder="Buscar" />
      <input type="text" className="border px-3 py-2 rounded-lg md:col-span-1" placeholder="01/01/2023 - 19/04/2025" />
      <div className="flex items-center justify-between col-span-full">
        <button className="flex items-center gap-1 border px-4 py-2 rounded-lg text-sm text-gray-700">
          <FunnelIcon className="h-4 w-4" /> Filtros
        </button>
      </div>
    </div>
  );
};
