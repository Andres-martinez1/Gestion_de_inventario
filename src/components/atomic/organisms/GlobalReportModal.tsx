import { DocumentArrowDownIcon, PrinterIcon } from "@heroicons/react/24/outline";

export const GlobalReportModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Generar Reporte Global</h2>
        <p className="text-sm text-gray-600 mb-4">Este reporte incluirá información de todas las bodegas.</p>

        <div className="space-y-3">
          <button className="w-full flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <span>Reporte Global en PDF</span>
            <DocumentArrowDownIcon className="h-5 w-5" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <span>Reporte Global en Excel</span>
            <DocumentArrowDownIcon className="h-5 w-5" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <span>Imprimir reporte</span>
            <PrinterIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="text-sm text-gray-500 ">Cancelar</button>
        </div>
      </div>
    </div>
  );
};
