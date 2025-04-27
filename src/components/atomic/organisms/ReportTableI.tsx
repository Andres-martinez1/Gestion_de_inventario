import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const dataFakeEntradas = [
  {
    nombre_elemento: "Impresora HP LaserJet",
    nombre_bodega: "Bodega Principal",
    cantidad_ingresada: 4,
    proveedor: "HP Colombia S.A.",
    fecha_ingreso: "2025-04-05T00:00:00Z",
  },
  {
    nombre_elemento: "Mouse Logitech M185",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 10,
    proveedor: "Distribuidora Tech",
    fecha_ingreso: "2025-04-06T00:00:00Z",
  },
  {
    nombre_elemento: "UPS APC 600VA",
    nombre_bodega: "Bodega Principal",
    cantidad_ingresada: 5,
    proveedor: "Sistemas y Energía S.A.S.",
    fecha_ingreso: "2025-04-07T00:00:00Z",
  },
  {
    nombre_elemento: "Teclado Mecánico Redragon",
    nombre_bodega: "Bodega Sur",
    cantidad_ingresada: 7,
    proveedor: "Compuventas",
    fecha_ingreso: "2025-04-08T00:00:00Z",
  },
];

export const ReportTableI = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Bodega</th>
            <th className="p-4 text-left">Cantidad</th>
            <th className="p-4 text-left">Estado</th>
            <th className="p-4 text-left">Proveedor</th>
            <th className="p-4 text-left">Fecha Ingreso</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataFakeEntradas.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-4">{r.nombre_elemento}</td>
              <td className="p-4">
                <ReportBadge label={r.nombre_bodega} color="blue" />
              </td>
              <td className="p-4">{r.cantidad_ingresada}</td>
              <td className="p-4">
                <ReportBadge label="Disponible" color="green" />
              </td>
              <td className="p-4">{r.proveedor}</td>
              <td className="p-4">
                {new Date(r.fecha_ingreso).toLocaleDateString()}
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
