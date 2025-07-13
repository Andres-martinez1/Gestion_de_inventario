import EntradaChart from "../components/admin/StatisticsChart";

const AdminStatsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-5 mt-5">Estadísticas de Entradas</h1>
      <p className="text-gray-500 ml-5  mb-4 ">Vista general del sistema de entradas de productos</p>
      
      <EntradaChart />
    </>
  );
};

export default AdminStatsPage;
