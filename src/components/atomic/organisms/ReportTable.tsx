import { useState } from "react";
import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const dataFake = [
  {
    nombre_elemento: "Laptop Dell Inspiron",
    nombre_bodega: "Bodega Central",
    cantidad_ingresada: 10,
    proveedor: "TechSupplier S.A.",
    fecha_ingreso: "2025-03-15T00:00:00Z",
  },
  {
    nombre_elemento: "Impresora Epson EcoTank",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 5,
    proveedor: "OfiMax Ltda.",
    fecha_ingreso: "2025-03-18T00:00:00Z",
  },
  {
    nombre_elemento: "Teclado Mecánico Redragon",
    nombre_bodega: "Bodega Sur",
    cantidad_ingresada: 25,
    proveedor: "CompuStore",
    fecha_ingreso: "2025-03-20T00:00:00Z",
  },
  {
    nombre_elemento: "Mouse Inalámbrico Logitech",
    nombre_bodega: "Bodega Central",
    cantidad_ingresada: 15,
    proveedor: "TechSupplier S.A.",
    fecha_ingreso: "2025-03-21T00:00:00Z",
  },
  {
    nombre_elemento: "Monitor Samsung 24”",
    nombre_bodega: "Bodega Oeste",
    cantidad_ingresada: 8,
    proveedor: "VisualTech",
    fecha_ingreso: "2025-03-22T00:00:00Z",
  },
  {
    nombre_elemento: "Router TP-Link AC1200",
    nombre_bodega: "Bodega Central",
    cantidad_ingresada: 12,
    proveedor: "Redes y Conexiones",
    fecha_ingreso: "2025-03-23T00:00:00Z",
  },
  {
    nombre_elemento: "Silla Ergonómica Ejecutiva",
    nombre_bodega: "Bodega Sur",
    cantidad_ingresada: 20,
    proveedor: "OfficeWorld",
    fecha_ingreso: "2025-03-24T00:00:00Z",
  },
  {
    nombre_elemento: "Disco Duro Externo 1TB",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 30,
    proveedor: "CompuStore",
    fecha_ingreso: "2025-03-25T00:00:00Z",
  },
  {
    nombre_elemento: "Regulador de Voltaje 1000VA",
    nombre_bodega: "Bodega Oeste",
    cantidad_ingresada: 18,
    proveedor: "EnerSys",
    fecha_ingreso: "2025-03-26T00:00:00Z",
  },
  {
    nombre_elemento: "Cámara de Seguridad IP",
    nombre_bodega: "Bodega Central",
    cantidad_ingresada: 10,
    proveedor: "SegurTech",
    fecha_ingreso: "2025-03-27T00:00:00Z",
  },
  {
    nombre_elemento: "Proyector Epson X41",
    nombre_bodega: "Bodega Norte",
    cantidad_ingresada: 6,
    proveedor: "OfiMax Ltda.",
    fecha_ingreso: "2025-03-28T00:00:00Z",
  },
  {
    nombre_elemento: "Switch de Red 24 Puertos",
    nombre_bodega: "Bodega Sur",
    cantidad_ingresada: 14,
    proveedor: "Redes y Conexiones",
    fecha_ingreso: "2025-03-29T00:00:00Z",
  },
];

export const ReportTable = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const filasPorPagina = 6;

  const totalPaginas = Math.ceil(dataFake.length / filasPorPagina);
  const offset = (paginaActual - 1) * filasPorPagina;
  const datosPaginados = dataFake.slice(offset, offset + filasPorPagina);

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
          {datosPaginados.map((r, i) => (
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

      {/* Paginador */}
      <div className="flex justify-center gap-2 py-4 bg-gray-100">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPaginaActual(index + 1)}
            className={`px-3 py-1 rounded ${
              paginaActual === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
