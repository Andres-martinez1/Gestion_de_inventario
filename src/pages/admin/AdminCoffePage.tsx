import { Alert } from "@heroui/react";
import ContactCard from "../../components/admin/DetailWareHouse/ContactCard";
import { BeakerIcon } from "@heroicons/react/24/outline";
const AdminCoffePage = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BeakerIcon className="w-6 h-6 text-amber-700" />
          Escuela Nacional del Café
        </h1>
        <p className="text-default-400 text-sm">
          Granos de café, equipos de tostado y utensilios para la preparación de
          café.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Alert
          color="success"
          title="Items Disponibles"
          description="342"
          variant="bordered"
        />
        <Alert
          color="primary"
          title="Total Items"
          description="320"
          variant="bordered"
        />
        <Alert
          color="warning"
          title="En Préstamo"
          description="25"
          variant="bordered"
        />
        <Alert
          color="danger"
          title="Stock Bajo"
          description="7"
          variant="bordered"
        />
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-4">Contacto Responsable</h2>
        <ContactCard
          name="Ana Martínez"
          role="Especialista en Café"
          email="ana.martinez@example.com"
          phone="+57 302 345 6789"
        />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Resumen de Inventario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4"> Descripción </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              La bodega de la Escuela Nacional del Café está especializada en el
              almacenamiento de diferentes variedades de granos de café, equipos
              de tostado, molinos y todos los implementos necesarios para la
              preparación y catación de café. Este espacio mantiene condiciones
              controladas de temperatura y humedad para preservar la calidad de
              los granos, y cuenta con un inventario detallado de todos los
              equipos especializados para la formación en barismo y procesos del
              café.
            </p>
            <h3 className="font-semibold mb-3">Categorías Principales</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex justify-between">
                <span>Equipos</span>
                <span>2 items</span>
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
                <span className="text-purple-600 font-medium">Devolucion</span>{" "}
                – Molino de cafe - 2023-05-18
              </li>
              <li>
                <span className="text-green-600 font-medium">Entrada</span> –
                Granos Arábica - Granos Arábica
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminCoffePage;
