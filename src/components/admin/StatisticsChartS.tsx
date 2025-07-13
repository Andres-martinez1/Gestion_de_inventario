import { Card, CardBody, CardHeader } from "@heroui/react";
import BarChart from "../atomic/atoms/BarChart";
import LineChart from "../atomic/atoms/LineChart";
import { useSalida } from "../../hooks/Salidas/useSalidas";
import { format } from "date-fns";
import { GetSalida } from "../../types/Salidas/GetSalida";

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

interface Salida {
  idSalida: number;
  cantidadEntregada: string;
  areaDestino: string;
  fechaSalida: string;
  fkIdBodega: Bodega;
  fkIdElemento: Elemento;
}

const SalidaChart = () => {
  const { data, isLoading, error } = useSalida();

  if (isLoading) return <p>Cargando datos...</p>;
  if (error instanceof Error) return <p>Error al cargar las salidas: {error.message}</p>;

  const salidas: Salida[] = Array.isArray(data)
  ? data.map((s: GetSalida) => ({
      idSalida: s.idSalida,
      cantidadEntregada: String(s.cantidadEntregada),
      areaDestino: String(s.areaDestino), 
      fechaSalida: new Date(s.fechaSalida).toISOString(),
      fkIdBodega: {
        idBodega: s.fkIdBodega?.idBodega || 0,
        nombreBodega: s.fkIdBodega?.nombreBodega || "Desconocida",
        encargado: s.fkIdBodega?.encargado || "",
      },
      fkIdElemento: {
        idElemento: s.fkIdElemento?.idElemento || 0,
        nombreElemento: s.fkIdElemento?.nombreElemento || "Elemento desconocido",
        stock: "0",
        clasificacion: "",
        fichaTecnica: "",
        uso: "",
        estado: "",
        serial: "",
        tipo: "",
        fechaSalida: null,
        fechaIngreso: "",
        fechaCaducidad: "",
      },
    }))
  : [];


  if (salidas.length === 0) return <p>No hay datos disponibles</p>;

  const agruparPorCampo = <T extends string>(
    datos: Salida[],
    obtenerClave: (s: Salida) => T
  ): Record<T, number> => {
    return datos.reduce((acc, salida) => {
      const clave = obtenerClave(salida);
      const cantidad = Number(salida.cantidadEntregada) || 0;
      acc[clave] = (acc[clave] || 0) + cantidad;
      return acc;
    }, {} as Record<T, number>);
  };

  const salidasPorFecha = agruparPorCampo(salidas, s =>
    format(new Date(s.fechaSalida), "yyyy-MM-dd")
  );

  const salidasPorBodega = agruparPorCampo(salidas, s =>
    s.fkIdBodega?.nombreBodega || "Bodega desconocida"
  );

  const salidasPorElemento = agruparPorCampo(salidas, s =>
    s.fkIdElemento?.nombreElemento || "Elemento desconocido"
  );

  const salidasPorArea = agruparPorCampo(salidas, s =>
    s.areaDestino || "Área desconocida"
  );

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ml-5 mb-10">
      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">Salidas por Fecha</h4>
        </CardHeader>
        <CardBody>
          <LineChart
            labels={Object.keys(salidasPorFecha)}
            datasets={[{
              label: "Cantidad Entregada",
              data: Object.values(salidasPorFecha),
              borderColor: "#E91E63",
            }]}
          />
        </CardBody>
      </Card>

      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">Salidas por Bodega</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(salidasPorBodega)}
            datasets={[{
              label: "Salidas por Bodega",
              data: Object.values(salidasPorBodega),
              backgroundColor: "#3F51B5",
            }]}
          />
        </CardBody>
      </Card>

      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">Salidas por Elemento</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(salidasPorElemento)}
            datasets={[{
              label: "Salidas por Elemento",
              data: Object.values(salidasPorElemento),
              backgroundColor: "#009688",
            }]}
          />
        </CardBody>
      </Card>

      <Card className="w-full">
        <CardHeader className="justify-between">
          <h4 className="text-small font-semibold leading-none text-default-600">Salidas por Área de Destino</h4>
        </CardHeader>
        <CardBody>
          <BarChart
            labels={Object.keys(salidasPorArea)}
            datasets={[{
              label: "Salidas por Área",
              data: Object.values(salidasPorArea),
              backgroundColor: "#FFC107",
            }]}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default SalidaChart;
