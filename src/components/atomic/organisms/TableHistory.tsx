import { ReportBadge } from "../atoms/ReportBadge";

const dataFakeEntradas = [
  {
    producto: "Laptop Dell XPS 13",
    tipo_movimiento: "Entrada",
    cantidad: 10,
    usuario_responsable: "Juan Pérez",
    observaciones: "Ingreso por compra",
    fecha_movimiento: "2025-04-10T00:00:00Z",
  },
  {
    producto: "Monitor Samsung 24",
    tipo_movimiento: "Salida",
    cantidad: 5,
    usuario_responsable: "Ana Gómez",
    observaciones: "Venta a cliente",
    fecha_movimiento: "2025-04-12T00:00:00Z",
  },
  {
    producto: "Teclado Logitech K120",
    tipo_movimiento: "Ajuste",
    cantidad: 20,
    usuario_responsable: "Carlos Ruiz",
    observaciones: "Ajuste inventario",
    fecha_movimiento: "2025-04-14T00:00:00Z",
  },
  {
    producto: "Mouse Óptico Genius",
    tipo_movimiento: "Entrada",
    cantidad: 30,
    usuario_responsable: "Lucía Torres",
    observaciones: "Devolución proveedor",
    fecha_movimiento: "2025-04-16T00:00:00Z",
  },
];

export const TableHistory = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Tipo de Movimiento</th>
            <th className="p-4 text-left">Cantidad</th>
            <th className="p-4 text-left">Usuario Responsable</th>
            <th className="p-4 text-left">Fecha Movimiento</th>
            <th className="p-4 text-left">Observaciones</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataFakeEntradas.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-4">{r.producto}</td>
              <td className="p-4">
                <ReportBadge
                  label={r.tipo_movimiento}
                  color={
                    r.tipo_movimiento === "Entrada"
                      ? "green"
                      : r.tipo_movimiento === "Salida"
                      ? "red"
                      : "yellow"
                  }
                />
              </td>
              <td className="p-4">{r.cantidad}</td>
              <td className="p-4">{r.usuario_responsable}</td>
              <td className="p-4">
                {new Date(r.fecha_movimiento).toLocaleDateString()}
              </td>
              <td className="p-4">{r.observaciones}</td>
              <td className="p-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-xs"
                  onClick={() => alert(`Detalles de ${r.producto}`)}
                >
                  Ver detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
