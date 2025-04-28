
import { ReportTitle } from "../../components/atomic/atoms/ReportTitle";
import { ReportFiltersI } from "../../components/atomic/molecules/ReportFiltersI";
import { TableInventory } from "../../components/atomic/organisms/TableInventory";

const InventoryPage = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-start mb-4">
        <ReportTitle
          title="Inventario General"
          subtitle="Inventario general de Bodegas"
        />
      </div>
      <ReportFiltersI />
      <TableInventory />
    </div>
  );
};

export default InventoryPage;
