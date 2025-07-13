import { useState } from "react";
import { ReportTitle } from "../components/atomic/atoms/ReportTitle";
import { ReportTable } from "../components/atomic/organisms/ReportTable";
import { GlobalReportModal } from "../components/atomic/organisms/GlobalReportModal";
import { DocumentArrowDownIcon } from "@heroicons/react/16/solid";

const AdminReports = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-start mb-4">
        <ReportTitle title="Reportes de Entradas" subtitle="Generación de reportes del sistema de gestión de entradas" />
        <div className="flex gap-2">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm w-[120px]" onClick={() => setModalOpen(true)}>
            <span className="ml-5">Exportar</span>
            <DocumentArrowDownIcon className="h-5 w-5 mt-[-20px] " />
          </button>
        </div>
      </div>

      <ReportTable />

      {modalOpen && <GlobalReportModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default AdminReports;
