import ElementoDetalleChart from "../components/admin/StatisticsChartI";

const AdminStatsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-5 mt-5">Estadísticas Inventario</h1>
      <p className="text-gray-500 ml-5  mb-4 ">Vista general del sistema de Inventario</p>
      
      <ElementoDetalleChart />
    </>
  );
};

export default AdminStatsPage;
