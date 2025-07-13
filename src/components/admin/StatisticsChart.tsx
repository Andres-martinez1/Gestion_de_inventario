import { Card, CardBody, CardHeader } from "@heroui/react";
import BarChart from "../atomic/atoms/BarChart";
import LineChart, { Dataset } from "../atomic/atoms/LineChart";
import { useEntradas } from "../../hooks/Entradas/useEntradas";
import { format } from "date-fns";

interface Bodega {
  nombreBodega: string;
}

interface Elemento {
  nombreElemento: string;
}

interface Entrada {
  fechaIngreso: string;
  cantidadIngresada: string;
  proveedor: string;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
}

const EntradaChart = () => {
  const { data, isLoading, error } = useEntradas();

  if (isLoading) return <p>Cargando datos...</p>;
  if (error instanceof Error) return <p>Error al cargar las entradas: {error.message}</p>;

  const entradas: Entrada[] = Array.isArray(data)
    ? data.map((entrada: any) => ({
        fechaIngreso: new Date(entrada.fechaIngreso).toISOString(),
        cantidadIngresada: String(entrada.cantidadIngresada),
        proveedor: entrada.proveedor,
        fkIdBodega: {
          nombreBodega: entrada.fkIdBodega?.nombreBodega || "Desconocida",
        },
        fkIdElemento: {
          nombreElemento: entrada.fkIdElemento?.nombreElemento || "Desconocido",
        },
      }))
    : [];

  if (entradas.length === 0) return <p>No hay datos disponibles</p>;

  const agruparPorCampo = <T extends string>(
    entradas: Entrada[],
    obtenerClave: (entrada: Entrada) => T
  ): Record<T, number> => {
    return entradas.reduce((acc, entrada) => {
      const clave = obtenerClave(entrada);
      const cantidad = Number(entrada.cantidadIngresada) || 0;
      acc[clave] = (acc[clave] || 0) + cantidad;
      return acc;
    }, {} as Record<T, number>);
  };

  const entradasPorFecha = agruparPorCampo(entradas, (entrada) =>
    format(new Date(entrada.fechaIngreso), "yyyy-MM-dd")
  );

  const entradasPorProveedor = agruparPorCampo(
    entradas,
    (entrada) => entrada.proveedor || "Desconocido"
  );

  const entradasPorBodega = agruparPorCampo(
    entradas,
    (entrada) => entrada.fkIdBodega?.nombreBodega || "Bodega desconocida"
  );

  const entradasPorElemento = agruparPorCampo(
    entradas,
    (entrada) => entrada.fkIdElemento?.nombreElemento || "Elemento desconocido"
  );

  const lineChartDatasets: Dataset[] = [
  {
    label: "Cantidad Ingresada",
    data: Object.values(entradasPorFecha),
    borderColor: "#4CAF50",
    backgroundColor: "#C8E6C9",
    tension: 0.3,
    fill: false,
  },
];

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ml-5 mb-10">
      <Card className="w-45">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">
            Entradas por Fecha
          </h4>
        </CardHeader>
        <CardBody>
          <LineChart
            labels={Object.keys(entradasPorFecha)}
            datasets={lineChartDatasets}
          />
        </CardBody>
      </Card>

      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">
            Entradas por Proveedor
          </h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(entradasPorProveedor)}
            datasets={[
              {
                label: "Entradas por Proveedor",
                data: Object.values(entradasPorProveedor),
                backgroundColor: "#FF9800",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">
            Entradas por Bodega
          </h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(entradasPorBodega)}
            datasets={[
              {
                label: "Entradas por Bodega",
                data: Object.values(entradasPorBodega),
                backgroundColor: "#2196F3",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">
            Entradas por Elemento
          </h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(entradasPorElemento)}
            datasets={[
              {
                label: "Entradas por Elemento",
                data: Object.values(entradasPorElemento),
                backgroundColor: "#8E24AA",
              },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default EntradaChart;
