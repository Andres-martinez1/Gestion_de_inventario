// GlobalReportModal.tsx
import { useState } from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import PDFInventoryReport from "./PDFInventoryReport";
import { useEntradas } from "../../../hooks/Entradas/useEntradas";

export const GlobalReportModal = ({ onClose }: { onClose: () => void }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const { data, isLoading } = useEntradas();
  const entradas = Array.isArray(data) ? data : [];

  const fechaGeneracion = new Date().toLocaleDateString();
  const generadoPor = "Administrador del Sistema";

  const handleDownload = async () => {
    setIsDownloading(true);
    const blob = await pdf(
      <PDFInventoryReport
        entradas={entradas}
        tipoReporte="Inventario por Bodega"
        bodega="Todas las bodegas"
        encargado="Varios"
        periodo="Último mes"
        generadoPor={generadoPor}
        fechaGeneracion={fechaGeneracion}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "reporte_global_inventario.pdf";
    link.click();
    URL.revokeObjectURL(url);
    setIsDownloading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg w-full max-w-4xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-xl font-bold">Vista Previa: Reporte Global de Inventario</h2>
            <p className="text-sm text-gray-600">
              Este reporte muestra el inventario consolidado de todas las bodegas en el sistema.
            </p>
          </div>
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700">✕</button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto rounded border mb-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">Cargando datos del inventario...</div>
          ) : (
            <PDFViewer width="100%" height="500">
              <PDFInventoryReport
                entradas={entradas}
                tipoReporte="Inventario por Bodega"
                bodega="Todas las bodegas"
                encargado="Varios"
                periodo="Último mes"
                generadoPor={generadoPor}
                fechaGeneracion={fechaGeneracion}
              />
            </PDFViewer>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition disabled:opacity-50"
          >
            <DocumentArrowDownIcon className="h-5 w-5" />
            {isDownloading ? "Descargando..." : "Descargar PDF"}
          </button>
        </div>
      </div>
    </div>
  );
};
