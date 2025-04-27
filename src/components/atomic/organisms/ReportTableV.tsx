import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const dataFakeEntradas = [
  {
    nombre_elemento: "Laptop Dell XPS 13",
    nombre_bodega: "Bodega Principal",
    cantidad_ingresada: 10,
    proveedor: "Dell",
    fecha_ingreso: "2025-04-10T00:00:00Z",
  },
  {
    nombre_elemento: "Monitor Samsung 24",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 5,
    proveedor: "Samsung",
    fecha_ingreso: "2025-04-12T00:00:00Z",
  },
  {
    nombre_elemento: "Teclado Logitech K120",
    nombre_bodega: "Bodega Sur",
    cantidad_ingresada: 20,
    proveedor: "Logitech",
    fecha_ingreso: "2025-04-14T00:00:00Z",
  },
  {
    nombre_elemento: "Mouse Óptico Genius",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 30,
    proveedor: "Genius",
    fecha_ingreso: "2025-04-16T00:00:00Z",
  },
];

export const ReportTableV = () => {
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
                <ReportBadge label={r.nombre_bodega || "—"} color="blue" />
              </td>
              <td className="p-4">{r.cantidad_ingresada}</td>
              <td className="p-4">
                <ReportBadge label="Disponible" color="green" />
              </td>
              <td className="p-4">{r.proveedor}</td>
              <td className="p-4">{new Date(r.fecha_ingreso).toLocaleDateString()}</td>
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
