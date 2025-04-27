// pages/DetalleEntradaPage.tsx
import { useState } from "react";
import Button from "../../components/atomic/atoms/Button";
import DetailsModal from "../../components/atomic/organisms/DetailsModal";

const DetalleEntradaPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const sampleData = {
    producto: "Laptop HP",
    cantidad: "5",
    bodega: "Principal",
    fecha: "2025-04-23",
  };

  const handleViewDetails = () => {
    setSelectedData(sampleData);
    setOpen(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Entradas</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <p className="mb-2">Producto: {sampleData.producto}</p>
        <Button onClick={handleViewDetails}>Ver Detalles</Button>
      </div>

      {selectedData && (
        <DetailsModal
          isOpen={open}
          onClose={() => setOpen(false)}
          data={selectedData}
        />
      )}
    </div>
  );
};

export default DetalleEntradaPage;
