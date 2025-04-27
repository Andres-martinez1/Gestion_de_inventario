import Carousel from "../../components/atomic/molecules/Carousel";
import InventoryCard from "../../components/atomic/molecules/InventoryCard";
import { routes } from "../../routes/Routes";
import Footer from "../../components/atomic/organisms/Footer";

const AdminPage = () => {
  const images = [
    "/src/assets/images/carousel/1.jpg",
    "/src/assets/images/carousel/2.jpg",
  ];

  return (
    <>
      <div className="mb-6">
        <Carousel
          images={images}
          height="h-64 sm:h-80 md:h-96"
          className="rounded-lg object-cover"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Sistema de Gestión de Bodegas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <InventoryCard
          title="Gestión de Inventario"
          description="Control completo sobre todos los productos en las bodegas"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5I0Pesez42pupncOliBweBHVSeZWkFGPwA&s"
          link={routes.warehousesDetail}
          textColor="text-blue-500"
          iconBgColor="bg-blue-100"
        />
        <InventoryCard
          title="Préstamos y Devoluciones"
          description="Gestión eficiente de préstamos y devoluciones de productos."
          imageUrl="https://media.istockphoto.com/id/1284067597/es/vector/dise%C3%B1o-vectorial-icono-de-la-factura-de-moda.jpg?s=612x612&w=0&k=20&c=zbO4SRH-T3x9h2eRsO6MsJbbllsxRCwKeLYokhVfd-k="
          link="https://github.com/heroui-inc/heroui"
          textColor="text-purple-500"
          iconBgColor="bg-purple-100"
        />
        <InventoryCard
          title="Categorías"
          description="Organización por categorías para una gestión más eficiente."
          imageUrl="https://static.vecteezy.com/system/resources/previews/004/568/669/non_2x/category-line-icon-vector.jpg"
          link="https://github.com/heroui-inc/heroui"
          textColor="text-green-600"
          iconBgColor="bg-green-100"
        />
        <InventoryCard
          title="Reportes"
          description="Informes detallados y análisis del sistema."
          imageUrl="https://static.vecteezy.com/system/resources/previews/029/184/802/non_2x/report-icon-symbol-design-illustration-vector.jpg"
          link={routes.warehouses}
          textColor="text-red-600"
          iconBgColor="bg-red-100"
        />
      </div>

      <Footer />
    </>
  );
};

export default AdminPage;
