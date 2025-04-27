import { useState } from "react";
import { EllipsisVerticalIcon, PrinterIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export const ReportActionsDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2">
        <EllipsisVerticalIcon className="h-5 w-5" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white border shadow rounded-lg w-48 z-10">
          <button className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" /> Exportar a PDF
          </button>
          <button className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" /> Exportar a Excel
          </button>
          <button className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            <PrinterIcon className="h-4 w-4 mr-2" /> Imprimir
          </button>
        </div>
      )}
    </div>
  );
};
