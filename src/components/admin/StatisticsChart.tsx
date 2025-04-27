import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import BarChart from "../atomic/atoms/BarChart";
import LineChart from "../atomic/atoms/LineChart";

// Definir la estructura de los datos esperados
interface TrendData {
  key: string;
  value: number;
}

interface TrendDataset {
  label: string;
  data: TrendData[];
}

interface WarehouseDataset {
  label: string;
  data: number;
}

interface Statistics {
  trendDatasets: TrendDataset[];
  warehouseDatasets: WarehouseDataset[];
}

const API_URL = "http://localhost:4000/bodega";

const StatisticsChart = () => {
  const [data, setData] = useState<Statistics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log("Datos recibidos:", result); // Verificar datos en consola

        if (!Array.isArray(result)) {
          throw new Error("La API no devolvió un array");
        }

        // Agrupar bodegas por sede
        const warehouseDataMap = result.reduce((acc, bodega) => {
          acc[bodega.sede] = (acc[bodega.sede] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        const warehouseDatasets: WarehouseDataset[] = Object.keys(warehouseDataMap).map((sede) => ({
          label: sede,
          data: warehouseDataMap[sede],
        }));

        const trendDatasets: TrendDataset[] = [
          {
            label: "Bodegas registradas",
            data: [
              { key: "Enero", value: 5 },
              { key: "Febrero", value: 10 },
              { key: "Marzo", value: result.length },
              { key: "Abril", value: 1 },
            ],
          },
        ];

        setData({ trendDatasets, warehouseDatasets });
      } catch (e) {
        console.error("Error al obtener datos:", e);
        setError(`No se pudieron cargar los datos: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-10">
      {/* Gráfico de Líneas */}
      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">Tendencias Mensuales</h4>
        </CardHeader>
        <CardBody className="justify-between">
          <LineChart
            labels={data.trendDatasets[0].data.map((item) => item.key)}
            datasets={data.trendDatasets.map((trend, index) => ({
              label: trend.label,
              data: trend.data.map((item) => item.value),
              backgroundColor: `hsl(${index * 30}, 70%, 50%)`,
              borderColor: `hsl(${index * 30}, 70%, 40%)`,
            }))}
          />
        </CardBody>
      </Card>

      {/* Gráfico de Barras */}
      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">Productos por Bodega</h4>
        </CardHeader>
        <CardBody className="justify-between">
          <BarChart
            labels={data.warehouseDatasets.map((warehouse) => warehouse.label)}
            datasets={[
              {
                label: "Bodegas",
                data: data.warehouseDatasets.map((warehouse) => warehouse.data),
                backgroundColor: "#4CAF50"
              },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default StatisticsChart;
