import { Alert } from "@heroui/react";
import ContactCard from "../../components/admin/DetailWareHouse/ContactCard";
import { SunIcon } from "@heroicons/react/24/outline";
const AdminAgroPage = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <SunIcon className="w-6 h-6 text-green-600" />
          Agrícola
        </h1>
        <p className="text-default-400 text-sm">
          Semillas, fertilizantes, herramientas y maquinaria para la producción
          agrícola.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Alert
          color="success"
          title="Items Disponibles"
          description="600"
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
          name="Luis Pérez"
          role="Tecnico Agricola"
          email="luis@example.com"
          phone="+57 303 456 7890"
        />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Resumen de Inventario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4"> Descripción </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              La bodega Agrícola está dedicada al almacenamiento de semillas,
              fertilizantes, pesticidas orgánicos y todo tipo de herramientas y
              maquinaria para la producción agrícola. Este espacio cuenta con
              áreas especializadas para el almacenamiento de productos químicos
              y biológicos, manteniendo estrictos controles de seguridad y
              condiciones ambientales adecuadas para preservar la viabilidad de
              las semillas y la efectividad de los insumos agrícolas.
            </p>
            <h3 className="font-semibold mb-3">Categorías Principales</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex justify-between">
                <span>Semillas</span>
                <span>2 items</span>
              </li>
              <li className="flex justify-between">
                <span>Herramientas</span>
                <span>1 items</span>
              </li>
              <li className="flex justify-between">
                <span>Insumos</span>
                <span>1 items</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-3">Actividad Reciente</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-red-600 font-medium">Salida</span> – Juego
                Utensilios - 2023-04-20
              </li>
              <li>
                <span className="text-blue-600 font-medium">prestamo</span> –
                Juego Utensilios - 2023-04-20
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminAgroPage;
