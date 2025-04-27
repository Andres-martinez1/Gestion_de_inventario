import { Alert, Button } from "@heroui/react";
import ContactCard from "../../components/admin/DetailWareHouse/ContactCard";

const AdminWhereHouseDetailPage = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
     
      <div>
        <h1 className="text-2xl font-bold">TIC</h1>
        <p className="text-default-400 text-sm">
          Información general de la bodega TIC
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Alert
          color="success"
          title="Items Disponibles"
          description="236"
          variant="bordered"
        />
        <Alert
          color="primary"
          title="Total Items"
          description="236"
          variant="bordered"
        />
        <Alert
          color="warning"
          title="En Préstamo"
          description="15"
          variant="bordered"
        />
        <Alert
          color="danger"
          title="Stock Bajo"
          description="8"
          variant="bordered"
        />
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-4">Contacto Responsable</h2>
        <ContactCard
          name="Diego Calderon"
          role="Coordinador de TIC"
          email="diego.calderon@example.com"
          phone="+57 300 123 4567"
        />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Resumen de Inventario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-3">Categorías Principales</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex justify-between">
                <span>Computadoras</span>
                <span>1 items</span>
              </li>
              <li className="flex justify-between">
                <span>Dispositivos</span>
                <span>1 items</span>
              </li>
              <li className="flex justify-between">
                <span>Audio</span>
                <span>1 items</span>
              </li>
              <li className="flex justify-between">
                <span>Fotografía</span>
                <span>1 items</span>
              </li>
              <li className="flex justify-between">
                <span>Redes</span>
                <span>1 items</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-3">Actividad Reciente</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-green-600 font-medium">Entrada</span> –
                Laptop UltraBook Pro - 2023-04-15
              </li>
              <li>
                <span className="text-red-600 font-medium">Salida</span> –
                Smartwatch FitPro - 2023-04-20
              </li>
              <li>
                <span className="text-blue-600 font-medium">Préstamo</span> –
                Auriculares NoiseGuard - 2023-05-10
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminWhereHouseDetailPage;
