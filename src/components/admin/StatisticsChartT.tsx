import { Card, CardBody, CardHeader } from "@heroui/react";
import BarChart from "../atomic/atoms/BarChart";
import LineChart from "../atomic/atoms/LineChart";
import { useTrazabilidad } from "../../hooks/Trazabilidad/useTrazabilidad";
import { format } from "date-fns";
import { GetTrazabilidad } from "../../types/Trazabilidad/GetTrazabilidad";

interface Bodega {
  idBodega: number;
  nombreBodega: string;
  encargado: string;
}

interface Elemento {
  idElemento: number;
  nombreElemento: string;
  stock: string;
  clasificacion: string;
  fichaTecnica: string;
  uso: string;
  estado: string;
  serial: string;
  tipo: string;
  fechaSalida: string | null;
  fechaIngreso: string;
  fechaCaducidad: string;
}

interface Trazabilidad {
  idTrazabilidad: number;
  tipoMovimiento: string;
  fecha: string;
  estadoActual: string;
  bodegaDestino: Bodega;
  bodegaOrigen: Bodega;
  fkIdElemento: Elemento;
}

const TrazabilidadChart = () => {
  const { data, isLoading, error } = useTrazabilidad();

  if (isLoading) return <p>Cargando trazabilidad...</p>;
  if (error instanceof Error) return <p>Error al cargar trazabilidad: {error.message}</p>;

  const trazabilidad: Trazabilidad[] = Array.isArray(data)
    ? data.map((item: GetTrazabilidad) => ({
        idTrazabilidad: item.idTrazabilidad,
        tipoMovimiento: item.tipoMovimiento,
        fecha: item.fecha.toString(),
        estadoActual: item.estadoActual,
        bodegaOrigen: {
          idBodega: item.bodegaOrigen.idBodega,
          nombreBodega: item.bodegaOrigen.nombreBodega,
          encargado: item.bodegaOrigen.encargado || "",
        },
        bodegaDestino: {
          idBodega: item.bodegaDestino.idBodega,
          nombreBodega: item.bodegaDestino.nombreBodega,
          encargado: item.bodegaDestino.encargado || "",
        },
        fkIdElemento: {
          idElemento: item.fkIdElemento.idElemento,
          nombreElemento: item.fkIdElemento.nombreElemento,
          stock: item.fkIdElemento.stock,
          clasificacion: item.fkIdElemento.clasificacion,
          fichaTecnica: item.fkIdElemento.fichaTecnica,
          uso: item.fkIdElemento.uso,
          estado: item.fkIdElemento.estado,
          serial: item.fkIdElemento.serial,
          tipo: item.fkIdElemento.tipo,
          fechaSalida: item.fkIdElemento.fechaSalida,
          fechaIngreso: item.fkIdElemento.fechaIngreso,
          fechaCaducidad: item.fkIdElemento.fechaCaducidad,
        },
      }))
    : [];

  if (trazabilidad.length === 0) return <p>No hay datos disponibles</p>;

  const agruparPorCampo = <T extends string>(
    datos: Trazabilidad[],
    obtenerClave: (s: Trazabilidad) => T
  ): Record<T, number> => {
    return datos.reduce((acc, item) => {
      const clave = obtenerClave(item);
      acc[clave] = (acc[clave] || 0) + 1;
      return acc;
    }, {} as Record<T, number>);
  };

  const movimientosPorFecha = agruparPorCampo(trazabilidad, t =>
    format(new Date(t.fecha), "yyyy-MM-dd")
  );

  const movimientosPorTipo = agruparPorCampo(trazabilidad, t =>
    t.tipoMovimiento || "Desconocido"
  );

  const movimientosPorElemento = agruparPorCampo(trazabilidad, t =>
    t.fkIdElemento?.nombreElemento || "Elemento desconocido"
  );

  const movimientosEntreBodegas = agruparPorCampo(trazabilidad, t => {
    const origen = t.bodegaOrigen?.nombreBodega || "Sin origen";
    const destino = t.bodegaDestino?.nombreBodega || "Sin destino";
    return `${origen} → ${destino}`;
  });

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ml-5 mb-10">
      <Card>
        <CardHeader>
          <h4 className="text-small font-semibold">Movimientos por Fecha</h4>
        </CardHeader>
        <CardBody>
          <LineChart
            labels={Object.keys(movimientosPorFecha)}
            datasets={[
              {
                label: "Cantidad de movimientos",
                data: Object.values(movimientosPorFecha),
                borderColor: "#4CAF50",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h4 className="text-small font-semibold">Movimientos por Tipo</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(movimientosPorTipo)}
            datasets={[
              {
                label: "Tipo de movimiento",
                data: Object.values(movimientosPorTipo),
                backgroundColor: "#2196F3",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h4 className="text-small font-semibold">Movimientos por Elemento</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(movimientosPorElemento)}
            datasets={[
              {
                label: "Movimientos por elemento",
                data: Object.values(movimientosPorElemento),
                backgroundColor: "#9C27B0",
              },
            ]}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h4 className="text-small font-semibold">Movimientos entre Bodegas</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(movimientosEntreBodegas)}
            datasets={[
              {
                label: "Traslados entre bodegas",
                data: Object.values(movimientosEntreBodegas),
                backgroundColor: "#FF5722",
              },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default TrazabilidadChart;
