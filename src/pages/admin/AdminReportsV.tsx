import { useState } from "react";
import { ReportTitle } from "../../components/atomic/atoms/ReportTitle";
import { ReportFiltersV } from "../../components/atomic/molecules/ReportFiltersV";
import { ReportTableV } from "../../components/atomic/organisms/ReportTableV";
import { GlobalReportModal } from "../../components/atomic/organisms/GlobalReportModal";

const AdminReports = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-start mb-4">
        <ReportTitle title="Reportes de Vencimientos" subtitle="Generación de reportes del sistema de gestión de vencimientos" />
        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded-lg text-sm ">🖨️ Imprimir</button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm" onClick={() => setModalOpen(true)}>
            ⬇️ Exportar
          </button>
        </div>
      </div>

      <ReportFiltersV />
      <ReportTableV />

      {modalOpen && <GlobalReportModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default AdminReports;
