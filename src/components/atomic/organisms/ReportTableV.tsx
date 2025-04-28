import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const productosSurtidos = [
 
  {
    tipo_producto: "Tecnología",
    nombre_elemento: "Laptop Dell XPS 13",
    nombre_bodega: "Bodega Principal",
    cantidad_ingresada: 10,
    proveedor: "Dell",
    fecha_ingreso: "2025-01-10T00:00:00Z",
    fecha_vencimiento: "2028-01-10T00:00:00Z", 
  },
  {
    tipo_producto: "Tecnología",
    nombre_elemento: "Monitor Samsung 24",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 5,
    proveedor: "Samsung",
    fecha_ingreso: "2025-03-12T00:00:00Z",
    fecha_vencimiento: "2027-03-12T00:00:00Z",
  },


  {
    tipo_producto: "Abono",
    nombre_elemento: "Fertilizante NPK",
    nombre_bodega: "Bodega Agrícola",
    cantidad_ingresada: 100,
    proveedor: "AgroFert",
    fecha_ingreso: "2024-10-01T00:00:00Z",
    fecha_vencimiento: "2025-04-20T00:00:00Z", 
  },
  {
    tipo_producto: "Abono",
    nombre_elemento: "Herbicida Orgánico",
    nombre_bodega: "Bodega Agrícola",
    cantidad_ingresada: 50,
    proveedor: "GreenGrow",
    fecha_ingreso: "2024-08-01T00:00:00Z",
    fecha_vencimiento: "2025-03-10T00:00:00Z", 
  },

  
  {
    tipo_producto: "Comida",
    nombre_elemento: "Yogurt Natural",
    nombre_bodega: "Bodega Fría",
    cantidad_ingresada: 30,
    proveedor: "Alpina",
    fecha_ingreso: "2025-04-01T00:00:00Z",
    fecha_vencimiento: "2025-05-01T00:00:00Z", 
  },
  {
    tipo_producto: "Comida",
    nombre_elemento: "Leche Entera",
    nombre_bodega: "Bodega Fría",
    cantidad_ingresada: 20,
    proveedor: "Colanta",
    fecha_ingreso: "2025-03-15T00:00:00Z",
    fecha_vencimiento: "2025-04-15T00:00:00Z", 
  },
];

// Función para verificar si un producto está vencido
const isVencido = (fechaVencimiento: string) => {
  const hoy = new Date();
  const vencimiento = new Date(fechaVencimiento);
  return hoy > vencimiento;
};

export const ReportTableV = () => {
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
            <th className="p-4 text-left">Fecha Vencimiento</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosSurtidos.map((r, i) => {
            const vencido = isVencido(r.fecha_vencimiento);
            return (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-4">{r.nombre_elemento}</td>
                <td className="p-4">
                  <ReportBadge label={r.tipo_producto} color="indigo" />
                </td>
                <td className="p-4">
                  <ReportBadge label={r.nombre_bodega || "—"} color="blue" />
                </td>
                <td className="p-4">{r.cantidad_ingresada}</td>
                <td className="p-4">
                  <ReportBadge
                    label={vencido ? "Vencido" : "Disponible"}
                    color={vencido ? "red" : "green"}
                  />
                </td>
                <td className="p-4">{r.proveedor}</td>
                <td className="p-4">
                  {new Date(r.fecha_ingreso).toLocaleDateString()}
                </td>
                <td className="p-4">
                  {new Date(r.fecha_vencimiento).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <ReportActionsDropdown />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
