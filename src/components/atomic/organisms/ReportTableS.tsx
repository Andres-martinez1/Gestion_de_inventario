import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const dataFake = [
  {
    nombre_elemento: "Laptop Dell Inspiron",
    nombre_bodega: "Bodega Central",
    cantidad_entregada: 2,
    area_destino: "Administración",
    programa_destino: "Ingeniería de Sistemas",
    responsable_retiro: "Carlos Mendoza",
    fecha_salida: "2025-04-01T00:00:00Z",
  },
  {
    nombre_elemento: "Monitor Samsung 24”",
    nombre_bodega: "Bodega Oeste",
    cantidad_entregada: 1,
    area_destino: "Contabilidad",
    programa_destino: "Contaduría Pública",
    responsable_retiro: "Luisa Ríos",
    fecha_salida: "2025-04-02T00:00:00Z",
  },
  {
    nombre_elemento: "Silla Ergonómica Ejecutiva",
    nombre_bodega: "Bodega Sur",
    cantidad_entregada: 3,
    area_destino: "Talento Humano",
    programa_destino: "Administración",
    responsable_retiro: "Jorge Pérez",
    fecha_salida: "2025-04-03T00:00:00Z",
  },
  {
    nombre_elemento: "Router TP-Link AC1200",
    nombre_bodega: "Bodega Central",
    cantidad_entregada: 2,
    area_destino: "Infraestructura",
    programa_destino: "Ingeniería de Telecomunicaciones",
    responsable_retiro: "Laura Torres",
    fecha_salida: "2025-04-04T00:00:00Z",
  },
];

export const ReportTableS = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Bodega</th>
            <th className="p-4 text-left">Cantidad</th>
            <th className="p-4 text-left">Área Destino</th>
            <th className="p-4 text-left">Programa</th>
            <th className="p-4 text-left">Responsable</th>
            <th className="p-4 text-left">Fecha Salida</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataFake.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-4">{r.nombre_elemento}</td>
              <td className="p-4">
                <ReportBadge label={r.nombre_bodega} color="blue" />
              </td>
              <td className="p-4">{r.cantidad_entregada}</td>
              <td className="p-4">
                <ReportBadge label={r.area_destino} color="yellow" />
              </td>
              <td className="p-4">{r.programa_destino}</td>
              <td className="p-4">{r.responsable_retiro}</td>
              <td className="p-4">
                {new Date(r.fecha_salida).toLocaleDateString()}
              </td>
              <td className="p-4">
                <ReportActionsDropdown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
