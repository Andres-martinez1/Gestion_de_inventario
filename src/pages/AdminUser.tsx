import { useState } from "react";
import {
  CakeIcon,
  EyeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Alert, Button, Input, Tab, Tabs } from "@heroui/react";
import ContactCard from "../components/admin/DetailWareHouse/ContactCard";
import ProductDetailModal from "../components/atomic/organisms/ProductDetailModal";
import LoanRequestModal from "../components/atomic/organisms/LoanRequestModal";

type Key = string | number;

const AdminGastronomyPage = () => {
  const [selectedTab, setSelectedTab] = useState<Key>("info");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showLoanModal, setShowLoanModal] = useState(false);

  const productos = [
    {
      nombre: "Batidora Industrial",
      categoria: "Electrodomésticos",
      ubicacion: "Estantería 1, Fila 4",
      stock: 40,
    },
    {
      nombre: "Horno Convección",
      categoria: "Electrodomésticos",
      ubicacion: "Área de Hornos",
      stock: 12,
    },
    {
      nombre: "Procesador de Alimentos",
      categoria: "Electrodomésticos",
      ubicacion: "Estantería 2, Fila 3",
      stock: 20,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl p-6 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-2">
          <CakeIcon className="w-8 h-8 text-orange-400" />
          <h1 className="text-3xl font-bold">Gastronomía</h1>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Activo
          </span>
        </div>
        <p className="text-sm">
          Ingredientes, utensilios y equipos culinarios para la preparación de alimentos.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Alert color="primary" title="Total de Items" description="789" variant="bordered" />
        <Alert color="success" title="Items Disponibles" description="750" variant="bordered" />
        <Alert color="warning" title="En Préstamo" description="39" variant="bordered" />
        <Alert color="danger" title="Stock Bajo" description="12" variant="bordered" />
      </div>

      <Tabs selectedKey={selectedTab} onSelectionChange={(key) => setSelectedTab(key)}>
        <Tab key="info" title="Información General">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-1">
              <ContactCard
                name="Jane Smith"
                role="Chef Instructora"
                email="jane.smith@example.com"
                phone="+57 300 987 6543"
              />
              <div className="bg-white rounded-lg shadow p-4 mt-4 border">
                <h3 className="font-semibold">Detalles de la Bodega</h3>
                <p className="text-sm mt-2 text-gray-700">
                  <strong>Ubicación:</strong> Edificio de Gastronomía, Planta Baja
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Fecha de Creación:</strong> 2019-08-10
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Última Actualización:</strong> 2023-10-05
                </p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6 border">
                <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                <p className="text-sm text-gray-700 mb-4">
                  La bodega de Gastronomía está equipada con una amplia gama de utensilios, equipos e ingredientes para la formación en artes culinarias. Desde batidoras industriales hasta hornos profesionales, este espacio almacena todo lo necesario para las prácticas gastronómicas, manteniendo un control estricto de los ingredientes perecederos y garantizando la disponibilidad de equipos para las clases prácticas.
                </p>
                <h3 className="font-semibold mb-2">Resumen de Inventario</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Total de productos:</strong> 789</p>
                    <p><strong>Disponibles:</strong> 750</p>
                    <p><strong>En préstamo:</strong> 39</p>
                    <p><strong>Stock bajo:</strong> 12</p>
                  </div>
                  <div>
                    <p><strong>Estado:</strong> Activo</p>
                    <p><strong>Capacidad:</strong> 85% ocupada</p>
                    <p><strong>Última actividad:</strong> 15/11/2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border">
                <h3 className="font-semibold mb-2">Actividad Reciente</h3>
                <ul className="text-sm space-y-1">
                  <li><span className="text-green-600 font-medium">Entrada</span> – Batidora industrial - 2023-04-15</li>
                  <li><span className="text-red-600 font-medium">Salida</span> – Juego Utensilios - 2023-04-20</li>
                </ul>
              </div>
            </div>
          </div>
        </Tab>

        <Tab key="productos" title={`Productos (${productos.length})`}>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Productos en Gastronomía</h2>
              <Input className="max-w-xs" placeholder="Buscar productos..." />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productos.map((producto, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border rounded-lg shadow-sm flex flex-col justify-between"
                >
                  <div className="h-36 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Imagen</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{producto.nombre}</h3>
                    <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-full">
                      Stock: {producto.stock}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{producto.categoria}</p>
                  <p className="text-xs text-gray-400">{producto.ubicacion}</p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="light"
                      startContent={<EyeIcon className="w-4 h-4" />}
                      className="w-full bg-gray-100"
                      onClick={() => {
                        setSelectedProduct({
                          ...producto,
                          marca: "KitchenPro",
                          numeroSerie: "KP2023-BI-1234",
                          bodega: "Gastronomía",
                          estado: "Disponible",
                        });
                        setShowDetailModal(true);
                      }}
                    >
                      Ver
                    </Button>
                    <Button
                      startContent={<ShoppingCartIcon className="w-4 h-4" />}
                      className="w-full bg-gray-900 text-white"
                      onClick={() => {
                        setSelectedProduct({
                          ...producto,
                          marca: "KitchenPro",
                          numeroSerie: "KP2023-BI-1234",
                          bodega: "Gastronomía",
                          estado: "Disponible",
                        });
                        setShowLoanModal(true);
                      }}
                    >
                      Solicitar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>

      {selectedProduct && (
        <>
          <ProductDetailModal
            isOpen={showDetailModal}
            onClose={() => setShowDetailModal(false)}
            onRequest={() => {
              setShowDetailModal(false);
              setShowLoanModal(true);
            }}
            product={selectedProduct}
          />
          <LoanRequestModal
            isOpen={showLoanModal}
            onClose={() => setShowLoanModal(false)}
            productName={selectedProduct.nombre}
            available={selectedProduct.stock}
          />
        </>
      )}
    </div>
  );
};

export default AdminGastronomyPage;
