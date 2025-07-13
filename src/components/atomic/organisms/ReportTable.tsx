import { useState } from "react";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";
import { useEntradas } from "../../../hooks/Entradas/useEntradas";
import { ReportBadge } from "../atoms/ReportBadge";
import { GetEntrada } from "../../../types/Entradas/GetEntrada";
// import SectionReportModal from "../modals/SectionReportModal"; // Asegúrate que este import esté correcto

export const ReportTable = () => {
  const { data, isLoading, isError } = useEntradas(); 
  const [paginaActual, setPaginaActual] = useState(1);
  const [, setOpenModal] = useState(false);
  const [, setSelectedEntrada] = useState<GetEntrada | null>(null);

  const filasPorPagina = 5;

  if (isLoading) {
    return <p className="p-4">Cargando entradas...</p>;
  }

  if (isError || !data) {
    return <p className="p-4 text-red-600">Error al cargar las entradas.</p>;
  }

  console.log("Datos recibidos:", data);

  const entradas = Array.isArray(data) ? data : []; // ✅ usar data directamente
  const totalPaginas = Math.ceil(entradas.length / filasPorPagina);
  const offset = (paginaActual - 1) * filasPorPagina;
  const datosPaginados = entradas.slice(offset, offset + filasPorPagina);

  const handleOpenModal = (entrada: GetEntrada) => {
    setSelectedEntrada(entrada);
    setOpenModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-4 text-left">Producto</th>
              <th className="p-4 text-left">Bodega</th>
              <th className="p-4 text-left">Cantidad</th>
              <th className="p-4 text-left">Proveedor</th>
              <th className="p-4 text-left">Fecha Ingreso</th>
              <th className="p-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosPaginados.map((r) => (
              <tr key={r.idEntrada}>
                <td className="p-4">
                  {r.fkIdElemento?.nombreElemento || "N/A"}
                </td>
                <td className="p-4">
                  <ReportBadge
                    label={r.fkIdBodega?.nombreBodega || "N/A"}
                    color="blue"
                  />
                </td>
                <td className="p-4">{r.cantidadIngresada}</td>
                <td className="p-4">{r.proveedor}</td>
                <td className="p-4">
                  {r.fechaIngreso
                    ? new Date(r.fechaIngreso).toLocaleDateString()
                    : "Sin fecha"}
                </td>
                <td className="p-4">
                  <ReportActionsDropdown
                    selectedItems={[r]}
                    titulo={`Reporte de ${r.fkIdElemento?.nombreElemento || "Elemento"}`}
                    onGenerateReport={() => handleOpenModal(r)}
                  />
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

      {/* Modal */}
      {/* {openModal && selectedEntrada && (
        <SectionReportModal
          entradas={[selectedEntrada]}
          titulo={`Reporte de ${selectedEntrada.fkIdElemento?.nombreElemento || "Elemento"}`}
          onClose={() => setOpenModal(false)}
        />
      )} */}
    </>
  );
};
