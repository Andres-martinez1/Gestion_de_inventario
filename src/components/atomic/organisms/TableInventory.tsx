import { ReportBadge } from "../atoms/ReportBadge";

const dataFakeInventario = [
  {
    producto: "Laptop Dell XPS 13",
    categoria: "Electrónica",
    bodega: "Bodega Principal",
    cantidad: 10,
    estado: "Disponible",
    proveedor: "Dell",
    fecha_ingreso: "2025-04-10T00:00:00Z",
    ultima_actualizacion: "2025-04-20T00:00:00Z",
  },
  {
    producto: "Monitor Samsung 24",
    categoria: "Pantallas",
    bodega: "Bodega Norte",
    cantidad: 5,
    estado: "Disponible",
    proveedor: "Samsung",
    fecha_ingreso: "2025-04-12T00:00:00Z",
    ultima_actualizacion: "2025-04-21T00:00:00Z",
  },
  {
    producto: "Teclado Logitech K120",
    categoria: "Periféricos",
    bodega: "Bodega Sur",
    cantidad: 20,
    estado: "Disponible",
    proveedor: "Logitech",
    fecha_ingreso: "2025-04-14T00:00:00Z",
    ultima_actualizacion: "2025-04-22T00:00:00Z",
  },
  {
    producto: "Mouse Óptico Genius",
    categoria: "Periféricos",
    bodega: "Bodega Norte",
    cantidad: 30,
    estado: "Disponible",
    proveedor: "Genius",
    fecha_ingreso: "2025-04-16T00:00:00Z",
    ultima_actualizacion: "2025-04-23T00:00:00Z",
  },
];

export const TableInventory = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Categoría</th>
            <th className="p-4 text-left">Bodega</th>
            <th className="p-4 text-left">Cantidad</th>
            <th className="p-4 text-left">Estado</th>
            <th className="p-4 text-left">Proveedor</th>
            <th className="p-4 text-left">Fecha Ingreso</th>
            <th className="p-4 text-left">Última Actualización</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataFakeInventario.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4">{item.producto}</td>
              <td className="p-4">{item.categoria}</td>
              <td className="p-4">{item.bodega}</td>
              <td className="p-4">{item.cantidad}</td>
              <td className="p-4">
                <ReportBadge
                  label={item.estado}
                  color={
                    item.estado === "Disponible"
                      ? "green"
                      : item.estado === "Bajo Stock"
                      ? "yellow"
                      : "red"
                  }
                />
              </td>
              <td className="p-4">{item.proveedor}</td>
              <td className="p-4">
                {new Date(item.fecha_ingreso).toLocaleDateString()}
              </td>
              <td className="p-4">
                {new Date(item.ultima_actualizacion).toLocaleDateString()}
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-xs"
                  onClick={() => alert(`Detalles de ${item.producto}`)}
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
