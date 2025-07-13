import { Card, CardBody, CardHeader } from "@heroui/react";
import BarChart from "../atomic/atoms/BarChart";
import LineChart from "../atomic/atoms/LineChart";
import { useElementos } from "../../hooks/Elementos/useElementos";
import { format } from "date-fns";
import { GetElemento } from "../../types/Elementos/GetElemento"; 

const ElementoDetalleChart = () => {
  const { data, isLoading, error } = useElementos();

  if (isLoading) return <p>Cargando datos del elemento...</p>;
  if (error instanceof Error) return <p>Error al cargar: {error.message}</p>;

  const elementos: GetElemento[] = Array.isArray(data) ? data : [];
  if (!elementos.length) return <p>No se encontró información del elemento.</p>;

  // Combinar todas las entradas y salidas
  const todasEntradas = elementos.flatMap(e => e.entradas || []);
  const todasSalidas = elementos.flatMap(e => e.salidas || []);

  const agruparPorCampo = <T extends string>(
    datos: typeof todasEntradas | typeof todasSalidas,
    obtenerClave: (item: any) => T,
    obtenerCantidad: (item: any) => number
  ): Record<T, number> => {
    return datos.reduce((acc, item) => {
      const clave = obtenerClave(item);
      const cantidad = obtenerCantidad(item);
      acc[clave] = (acc[clave] || 0) + cantidad;
      return acc;
    }, {} as Record<T, number>);
  };

  // Entradas por proveedor
  const entradasPorProveedor = agruparPorCampo(
    todasEntradas,
    e => e.proveedor,
    e => parseInt(e.cantidadIngresada || "0")
  );

  // Salidas por área
  const salidasPorArea = agruparPorCampo(
    todasSalidas,
    s => s.areaDestino,
    s => parseInt(s.cantidadEntregada || "0")
  );

  // Línea de tiempo
  const movimientosPorFecha: Record<string, { entradas: number; salidas: number }> = {};

  todasEntradas.forEach(e => {
    const fecha = e.fechaIngreso ? format(new Date(e.fechaIngreso), "yyyy-MM-dd") : "";
    if (!fecha) return;
    movimientosPorFecha[fecha] = movimientosPorFecha[fecha] || { entradas: 0, salidas: 0 };
    movimientosPorFecha[fecha].entradas += parseInt(e.cantidadIngresada || "0");
  });

  todasSalidas.forEach(s => {
    if (!s.fechaSalida) return;
    const fecha = format(new Date(s.fechaSalida), "yyyy-MM-dd");
    movimientosPorFecha[fecha] = movimientosPorFecha[fecha] || { entradas: 0, salidas: 0 };
    movimientosPorFecha[fecha].salidas += parseInt(s.cantidadEntregada || "0");
  });

  const fechasUnicas = Object.keys(movimientosPorFecha).sort();

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ml-5 mb-10">
      <Card>
        <CardHeader>
          <h4 className="text-small font-semibold">Entradas por Proveedor</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(entradasPorProveedor)}
            datasets={[
              {
                label: "Cantidad ingresada",
                data: Object.values(entradasPorProveedor),
                backgroundColor: "#4CAF50",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h4 className="text-small font-semibold">Salidas por Área</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(salidasPorArea)}
            datasets={[
              {
                label: "Cantidad entregada",
                data: Object.values(salidasPorArea),
                backgroundColor: "#FF9800",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <h4 className="text-small font-semibold">Línea de Tiempo de Movimientos</h4>
        </CardHeader>
        <CardBody>
          <LineChart
            labels={fechasUnicas}
            datasets={[
              {
                label: "Entradas",
                data: fechasUnicas.map(f => movimientosPorFecha[f]?.entradas || 0),
                borderColor: "#4CAF50",
                fill: false,
                tension: 0.4,
              },
              {
                label: "Salidas",
                data: fechasUnicas.map(f => movimientosPorFecha[f]?.salidas || 0),
                borderColor: "#F44336",
                fill: false,
                tension: 0.4,
              },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ElementoDetalleChart;
