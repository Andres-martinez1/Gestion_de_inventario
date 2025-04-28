
import { ReportTitle } from "../../components/atomic/atoms/ReportTitle";
import { FilterHistory } from "../../components/atomic/molecules/FilterHistory";
import { TableHistory } from "../../components/atomic/organisms/TableHistory";

const MovementHistoryPage = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-start mb-4">
        <ReportTitle
          title="Historial de Movimientos"
          subtitle="Registro detallado de entradas y salidas de inventario"
        />
      </div>
      <FilterHistory />
      <TableHistory />
    </div>
  );
};

export default MovementHistoryPage;
