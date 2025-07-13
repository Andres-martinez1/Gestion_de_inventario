import SalidaChart from "../components/admin/StatisticsChartS";

const AdminStatsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-5 mt-5">Estadísticas de Salidas</h1>
      <p className="text-gray-500 ml-5 mb-4 ">Vista general del sistema de salidas de productos</p>
      <SalidaChart />
    </>
  );
};

export default AdminStatsPage;
