import { useState } from "react";
import { useTrazabilidad } from "../../../hooks/Trazabilidad/useTrazabilidad";
import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

export const ReportTableT = () => {
  const { data, isLoading, isError } = useTrazabilidad();
    const [paginaActual, setPaginaActual] = useState(1);
    const filasPorPagina = 5;

  if (isLoading) {
    return <p className="p-4">Cargando trazabilidad...</p>;
  }

  if (isError || !data) {
    return <p className="p-4 text-red-600">Error al cargar trazabilidad.</p>;
  }
  console.log("Datos recibidos:", data);
  const trazabilidad = Array.isArray(data) ? data : [];
  const totalPaginas = Math.ceil(trazabilidad.length / filasPorPagina);
  const offset = (paginaActual - 1) * filasPorPagina;
  const datosPaginados = trazabilidad.slice(offset, offset + filasPorPagina);

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Tipo de Movimiento</th>
            <th className="p-4 text-left">Fecha</th>
            <th className="p-4 text-left">Bodega Origen</th>
            <th className="p-4 text-left">Bodega Destino</th>
            <th className="p-4 text-left">Estado Actual</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosPaginados.map((r) => (
            <tr key={r.idTrazabilidad} className="border-b hover:bg-gray-50">
              <td className="p-4">{r.fkIdElemento?.nombreElemento || "N/A"}</td>
              <td className="p-4">
                <ReportBadge
                  label={r.tipoMovimiento}
                  color="yellow"
                />
              </td>
              <td className="p-4">{new Date(r.fecha).toLocaleDateString()}</td>
              <td className="p-4">{r.bodegaOrigen?.nombreBodega || "N/A"}</td>
              <td className="p-4">{r.bodegaDestino?.nombreBodega || "N/A"}</td>

       
              <td className="p-4">
                <ReportBadge label={r.estadoActual || "N/A"} color="blue" />
              </td>
              <td className="p-4">
                <ReportActionsDropdown selectedItems={[]} onGenerateReport={function (): void {
                  throw new Error("Function not implemented.");
                } } />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Paginador */}
      <div className="flex justify-center gap-2 py-4 bg-gray-100">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPaginaActual(index + 1)}
            className={`px-3 py-1 rounded transition duration-150 ease-in-out ${
              paginaActual === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
