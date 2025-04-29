// pages/DetalleEntradaPage.tsx
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DetailsModal from "../../components/atomic/organisms/DetailsModal";
import { routes } from "../../routes/Routes";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DetalleEntradaPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const sampleData = {
    producto: "Laptop UltraBook Pro",
    cantidad: "250",
    bodega: "Estantería B-45",
    marca: "SwiftLine",
    serie: "SL2023-UL-5284",
    fecha: "2025-04-23",
    descripcion:
      "Esta ultrabook ligera combina un diseño elegante con un potente rendimiento, ideal para profesionales en movimiento.",
  };

  const handleViewDetails = () => {
    setSelectedData(sampleData);
    setOpen(true);
  };

  return (
    <>
    <div className="p-6  min-h-screen">
      <div
        className="text-sm text-gray-500  mb-4 cursor-pointer" onClick={() => (routes.products)}
      >
        ← Volver a Productos
      </div>
      <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
        <div className="flex-1">
          <div className="bg-gray-100 rounded-lg h-[300px] flex items-center justify-center">
            <ClipboardDocumentListIcon className="h-16 w-16 text-gray-400" />
          </div>
          <div className="flex gap-2 mt-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-20 h-16 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-0.5 rounded">
            Electrónica
          </span>
          <h2 className="text-2xl font-bold">{sampleData.producto}</h2>
          <p className="text-sm text-green-700 font-semibold">
            En Stock: {sampleData.cantidad} unidades
          </p>
          <p className="text-sm text-gray-600">{sampleData.descripcion}</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-500">Marca</p>
              <p className="font-medium">{sampleData.marca}</p>
            </div>
            <div>
              <p className="text-gray-500">Ubicación</p>
              <p className="font-medium">{sampleData.bodega}</p>
            </div>
            <div>
              <p className="text-gray-500">Número de Serie</p>
              <p className="font-medium">{sampleData.serie}</p>
            </div>
            <div>
              <p className="text-gray-500">Disponibilidad</p>
              <p className="text-green-600 font-medium">Inmediata</p>
            </div>
          </div>

          <div className="flex items-center mt-6">
            <span className="mr-3">Cantidad</span>
            <input
              type="number"
              defaultValue={1}
              className="border rounded w-16 px-2 py-1 text-center"
              min={1}
              max={sampleData.cantidad}
            />
          </div>

          <button
            className="mt-4 bg-gray-900 hover:bg-gray-800 text-white w-60 h-11 rounded"
            onClick={handleViewDetails}
          >
            {" "}
            Confirmar orden
          </button>

          <div className="flex justify-around mt-4 text-xs text-gray-500">
            <span>📦 Entrega inmediata</span>
            <span>✅ Garantía de calidad</span>
            <span>📊 Inventario actualizado</span>
          </div>
        </div>
      </div>

      <Tab.Group as="div" className="mt-6">
        <Tab.List className="flex space-x-1 bg-gray-100 p-1 rounded">
          {["Detalles", "Especificaciones", "Almacenamiento"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-white shadow text-blue-600"
                    : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-700"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4 bg-white shadow p-4 rounded-lg">
          <Tab.Panel>
            <h3 className="text-lg font-semibold mb-2">
              📌 Descripción Detallada
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              La Laptop UltraBook Pro representa lo último en tecnología
              portátil... (contenido recortado)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold mb-1">
                  🧩 Características Principales
                </h4>
                <ul className="text-sm list-disc list-inside text-gray-600 space-y-1">
                  <li>Procesador de última generación</li>
                  <li>Diseño ultradelgado</li>
                  <li>Pantalla de alta resolución</li>
                  <li>Batería de larga duración</li>
                  <li>Conectividad USB-C / Thunderbolt</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">🛠️ Mantenimiento</h4>
                <p className="text-sm text-gray-700">
                  Frecuencia:{" "}
                  <strong className="text-gray-900">Cada 6 meses</strong>
                  <br />
                  Último mantenimiento: 15/03/2024
                  <br />
                  Próximo mantenimiento: 15/09/2024
                  <br />
                  Procedimientos: Limpieza, actualización de software,
                  verificación de batería.
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <h3 className="text-lg font-semibold mb-2">
              📐 Especificaciones Técnicas
            </h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Procesador: Intel Core i7 12ª Gen</li>
              <li>RAM: 16GB DDR5</li>
              <li>Almacenamiento: 512GB SSD NVMe</li>
              <li>Pantalla: 14" FHD IPS Antirreflejo</li>
              <li>Tarjeta Gráfica: Intel Iris Xe</li>
              <li>Conectividad: Wi-Fi 6, Bluetooth 5.2</li>
              <li>Puertos: 2x USB-C, 1x HDMI, 1x Jack 3.5mm</li>
              <li>Sistema Operativo: Windows 11 Pro</li>
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <h3 className="text-lg font-semibold mb-2">
              🏢 Información de Almacenamiento
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              El producto se encuentra actualmente almacenado en la{" "}
              <strong>{sampleData.bodega}</strong>.
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Zona: Electrónica - Piso 2</li>
              <li>Estantería: B-45</li>
              <li>Nivel: Medio</li>
              <li>
                Condiciones: Temperatura controlada, sin exposición solar
                directa
              </li>
              <li>Seguridad: Acceso restringido, cámaras de vigilancia 24/7</li>
              <li>
                Último movimiento: 22/04/2025 (entrada por compra directa)
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {selectedData && (
        <DetailsModal
          isOpen={open}
          onClose={() => setOpen(false)}
          data={selectedData}
        />
      )}
    </div>
    </>
    
  );
};

export default DetalleEntradaPage;
