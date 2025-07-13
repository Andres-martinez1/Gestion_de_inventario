import TrazabilidadChart from "../components/admin/StatisticsChartT";

const AdminStatsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-5 mt-5">Estadísticas de Trazabilidad de Sistema</h1>
      <p className="text-gray-500 ml-5 mb-4 ">Vista general del sistema de trazabilidad </p>
      
      <TrazabilidadChart />
    </>
  );
};

export default AdminStatsPage;
