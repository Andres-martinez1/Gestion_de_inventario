import { useState } from "react";
import {
  EllipsisVerticalIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { GetEntrada } from "../../../types/Entradas/GetEntrada";

type Props = {
  selectedItems: GetEntrada[];
  titulo?: string;
  onGenerateReport: () => void; // callback para abrir el modal
};

export const ReportActionsDropdown = ({
  onGenerateReport,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleExportPDF = () => {
    setOpen(false);
    onGenerateReport();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-gray-100 rounded-full transition"
      >
        <EllipsisVerticalIcon className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border shadow rounded-lg w-48 z-10">
          <button
            onClick={handleExportPDF}
            className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" /> Exportar a PDF
          </button>
        </div>
      )}
    </div>
  );
};
