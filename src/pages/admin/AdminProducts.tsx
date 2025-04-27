import { useState } from "react";
import { Title } from "../../components/atomic/atoms/Title";
import { Subtitle } from "../../components/atomic/atoms/Subtitle";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { routes } from "../../routes/Routes";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";

const AdminProducts = ({ item }) => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleVerDetalles = () => {
    navigate(routes.detalles, { state: { data: item } });
  };


  // Productos similares a los de la imagen de referencia
  const products = [
    {
      id: 1,
      name: "Auriculares NoiseGuard",
      description: "Auriculares inalámbricos con cancelación de ruido activa.",
      type: "Audio",
      stock: 28,
      image: "/placeholder.png",
      status: "En Stock",
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Cámara MirrorPro",
      description: "Cámara mirrorless de alta resolución para fotógrafos profesionales.",
      type: "Fotografía",
      stock: 15,
      image: "/placeholder.png",
      status: "En Stock",
      isHighlighted: true,
    },
    {
      id: 3,
      name: "Laptop UltraBook Pro",
      description: "Laptop ultradelgada con potente rendimiento para profesionales.",
      type: "Computación",
      stock: 0,
      image: "/placeholder.png",
      status: "Agotado",
      isHighlighted: false,
    },
    {
      id: 4,
      name: "Monitor CurvedView",
      description: "Monitor curvo de 32 pulgadas con resolución 4k para una experiencia inmersiva.",
      type: "Computación",
      stock: 18,
      image: "/placeholder.png",
      status: "En Stock",
      isHighlighted: false,
    },
    {
      id: 5,
      name: "Proyector MiniBeam",
      description: "Proyector portátil de alta luminosidad con conectividad inalámbrica.",
      type: "Audiovisual",
      stock: 0,
      image: "/placeholder.png",
      status: "Agotado",
      isHighlighted: true,
    },
    {
      id: 6,
      name: "Smartwatch FitPro",
      description: "Reloj inteligente con monitoreo avanzado de salud y fitness.",
      type: "Electrónica",
      stock: 45,
      image: "/placeholder.png",
      status: "En Stock",
      isHighlighted: true,
    },
  ];

  const filteredProducts = products.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || p.type.toLowerCase() === category.toLowerCase())
  );

  // Calcular totales para mostrar en los indicadores
  const totalProducts = products.length;
  const inStockProducts = products.filter((p) => p.stock > 0).length;
  const outOfStockProducts = products.filter((p) => p.stock === 0).length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title text="Productos" />
          <Subtitle text="Gestión de inventario y préstamos de equipos" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex border rounded">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${view === "grid" ? "bg-gray-100" : "bg-white"}`}
              aria-label="Vista de cuadrícula"
            >
              <Squares2X2Icon className="h-5 w-5 text-gray-500" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 ${view === "list" ? "bg-gray-100" : "bg-white"}`}
              aria-label="Vista de lista"
            >
              <ListBulletIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gray-900  text-white rounded-md px-4 py-2 text-sm font-medium flex items-center gap-1"
          >
            <PlusIcon className="h-4 w-4" />
            Nuevo Producto
          </button>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10" />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="audio">Audio</option>
            <option value="fotografía">Fotografía</option>
            <option value="computación">Computación</option>
            <option value="audiovisual">Audiovisual</option>
            <option value="electrónica">Electrónica</option>
          </select>

          <button className="border border-gray-300 rounded-md px-3 py-2 flex items-center gap-1">
            <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500" />
            Filtros
          </button>
        </div>
      </div>

      {/* Indicadores de estado */}
      <div className="flex gap-4 mb-6 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Total:</span>
          <span className="font-medium">{totalProducts} productos</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500">En Stock:</span>
          <span className="font-medium text-green-600">{inStockProducts}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Agotados:</span>
          <span className="font-medium text-red-500">{outOfStockProducts}</span>
        </div>
      </div>

      {/* Grid de productos */}
      <div
        className={`grid ${view === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"} gap-6`}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Estado del producto (En Stock / Agotado / Destacado) */}
            <div className="relative">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute top-2 left-2 flex gap-2">
                {product.status === "En Stock" && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    En Stock
                  </span>
                )}
                {product.status === "Agotado" && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    Agotado
                  </span>
                )}
                {product.isHighlighted && (
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                    Destacado
                  </span>
                )}
              </div>
            </div>

            {/* Información del producto */}
            <div className="p-4">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {product.type}
                </span>
                <span
                  className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}
                >
                  Stock: {product.stock}
                </span>
              </div>

              <Button onClick={handleVerDetalles}>
                Ver Detalles
              </Button>

            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-8">
        <nav
          className="inline-flex items-center -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Primera página</span>
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          </button>
          <button className="px-2 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Anterior</span>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 border border-gray-300 bg-black text-white hover:bg-gray-800">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            3
          </button>
          <span className="px-4 py-2 border border-gray-300 bg-white text-gray-700">
            ...
          </span>
          <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            6
          </button>
          <button className="px-2 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Siguiente</span>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <button className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Última página</span>
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Modal para agregar producto */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-black mb-1">
              Agregar Nuevo Producto
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Complete el formulario para agregar un nuevo producto al
              inventario.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Categoría</label>
                <select className="w-full border px-3 py-2 rounded-lg">
                  <option>Seleccionar</option>
                  <option>Audio</option>
                  <option>Fotografía</option>
                  <option>Computación</option>
                  <option>Audiovisual</option>
                  <option>Electrónica</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Descripción</label>
                <textarea
                  className="w-full border px-3 py-2 rounded-lg"
                  rows={3}
                ></textarea>
              </div>
              <div>
                <label className="text-sm font-medium">Cantidad en Stock</label>
                <input
                  type="number"
                  className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Ubicación</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Número de Serie</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Marca</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">
                  Imagen del Producto
                </label>
                <input
                  type="file"
                  className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div className="md:col-span-2 flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm">Marcar como destacado</label>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-6">
              <button
                onClick={() => setModalOpen(false)}
                className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:shadow">
                Guardar Producto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
