import { Alert } from "@heroui/react";
import { CakeIcon } from "@heroicons/react/24/outline";
import ContactCard from "../../components/admin/DetailWareHouse/ContactCard";

const AdminGastronomyPage = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CakeIcon className="w-6 h-6 text-purple-600" />
          Gastronomía
        </h1>
        <p className="text-default-400 text-sm">
          Información general de la bodega de Gastronomia
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
          name="Jane Smith"
          role="Instructora"
          email="jane.smith@example.com"
          phone="+57 300 987 6543"
        />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Resumen de Inventario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4"> Descripción </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              La bodega de Gastronomía está equipada con una amplia gama de
              utensilios, equipos e ingredientes para la formación en artes
              culinarias. Desde batidoras industriales hasta hornos
              profesionales, este espacio almacena todo lo necesario para las
              prácticas gastronómicas, manteniendo un control estricto de los
              ingredientes perecederos y garantizando la disponibilidad de
              equipos para las clases prácticas.
            </p>
            <h3 className="font-semibold mb-3">Categorías Principales</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex justify-between">
                <span>Electrodomesticos</span>
                <span>2 items</span>
              </li>
              <li className="flex justify-between">
                <span>Utensilios</span>
                <span>1 items</span>
              </li>
              <li className="flex justify-between">
                <span>Coccion</span>
                <span>1 items</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-3">Actividad Reciente</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-green-600 font-medium">Entrada</span> –
                Batidora industrial - 2023-04-15
              </li>
              <li>
                <span className="text-red-600 font-medium">Salida</span> – Juego
                Utensilios - 2023-04-20
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminGastronomyPage;
