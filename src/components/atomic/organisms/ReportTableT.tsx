import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const dataFakeTrazabilidad = [
  {
    nombre_elemento: "Impresora HP LaserJet",
    tipo_movimiento: "entrada",
    fecha: "2025-04-05T00:00:00Z",
    bodega_origen: "Bodega Norte",
    bodega_destino: "Bodega Principal",
    responsable: "Carlos Pérez",
    estado_actual: "Disponible",
  },
  {
    nombre_elemento: "Mouse Logitech M185",
    tipo_movimiento: "salida",
    fecha: "2025-04-06T00:00:00Z",
    bodega_origen: "Bodega Sur",
    bodega_destino: "Bodega Principal",
    responsable: "Ana Gómez",
    estado_actual: "No Disponible",
  },
  {
    nombre_elemento: "UPS APC 600VA",
    tipo_movimiento: "entrada",
    fecha: "2025-04-07T00:00:00Z",
    bodega_origen: "Bodega Norte",
    bodega_destino: "Bodega Principal",
    responsable: "Luis Martínez",
    estado_actual: "Disponible",
  },
  {
    nombre_elemento: "Teclado Mecánico Redragon",
    tipo_movimiento: "salida",
    fecha: "2025-04-08T00:00:00Z",
    bodega_origen: "Bodega Sur",
    bodega_destino: "Bodega Norte",
    responsable: "Elena López",
    estado_actual: "No Disponible",
  },
];

export const ReportTableT = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Tipo de Movimiento</th>
            <th className="p-4 text-left">Fecha</th>
            <th className="p-4 text-left">Bodega Origen</th>
            <th className="p-4 text-left">Bodega Destino</th>
            <th className="p-4 text-left">Responsable</th>
            <th className="p-4 text-left">Estado Actual</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataFakeTrazabilidad.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-4">{r.nombre_elemento}</td>
              <td className="p-4">
                <ReportBadge
                  label={r.tipo_movimiento}
                  color={r.tipo_movimiento === "entrada" ? "green" : "red"}
                />
              </td>
              <td className="p-4">{new Date(r.fecha).toLocaleDateString()}</td>
              <td className="p-4">{r.bodega_origen || "—"}</td>
              <td className="p-4">{r.bodega_destino || "—"}</td>
              <td className="p-4">{r.responsable || "—"}</td>
              <td className="p-4">
                <ReportBadge label={r.estado_actual || "—"} color="blue" />
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
