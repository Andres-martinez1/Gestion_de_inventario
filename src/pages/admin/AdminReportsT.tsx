import { useState } from "react";
import { ReportTitle } from "../../components/atomic/atoms/ReportTitle";
import { ReportFiltersT } from "../../components/atomic/molecules/ReportFiltersT";
import { ReportTableT } from "../../components/atomic/organisms/ReportTableT";
import { GlobalReportModal } from "../../components/atomic/organisms/GlobalReportModal";

const AdminReports = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-start mb-4">
        <ReportTitle title="Reportes Trazabilidad" subtitle="Generación de reportes del sistema de gestión de trazabilidad" />
        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded-lg text-sm ">🖨️ Imprimir</button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm" onClick={() => setModalOpen(true)}>
            ⬇️ Exportar
          </button>
        </div>
      </div>

      <ReportFiltersT />
      <ReportTableT />

      {modalOpen && <GlobalReportModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default AdminReports;
