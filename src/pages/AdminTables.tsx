import {
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import TablaArea from "../components/admin/tablas/TablaAreas";
import TablaBodegas from "../components/admin/tablas/TablaBodegas";
import TablaCentro from "../components/admin/tablas/TablaCentro";
import TablaDetalleSolicitud from "../components/admin/tablas/TablaDetalleSolicitud";
import TablaDetalle from "../components/admin/tablas/TablaDetalles";
import TablaDetalleEntrega from "../components/admin/tablas/TablaDetalleEntrega";
// import TablaElemento from "../components/admin/tablas/TablaElementos";
// import TablaEntrada from "../components/admin/tablas/TablaEntradas";
import TablaEntregaMaterial from "../components/admin/tablas/TablaEntregaMaterial";
import TablaFicha from "../components/admin/tablas/TablaFicha";
import TablaMovimiento from "../components/admin/tablas/TablaMovimiento";
import TablaMunicipio from "../components/admin/tablas/TablaMunicipios";
import TablaPrograma from "../components/admin/tablas/TablaProgramas";
import TablaRol from "../components/admin/tablas/TablaRoles";
//import TablaSalida from "../components/admin/tablas/TablaSalidas";
import TablaSede from "../components/admin/tablas/TablaSedes";
import TablaSolicitud from "../components/admin/tablas/TablaSolicitudes";
// import TablaTrazabilidad from "../components/admin/tablas/TablaTrazabilidad";
import TablaUsuario from "../components/admin/tablas/TablaUsuarios";
import TablaUsuarioBodega from "../components/admin/tablas//TablaUsuarioBodega";
import TablaUsuarioFicha from "../components/admin/tablas/TablaUsuarioFicha";

const tablas = [
  "Area",
  "Bodegas",
  "Centro",
  "DetalleSolicitud",
  "Detalle",
  "DetalleEntrega",
  "Elemento",
  "Entrada",
  "EntregaMaterial",
  "Ficha",
  "Movimiento",
  "Municipio",
  "Programa",
  "Rol",
  "Salida",
  "Sede",
  "Solicitud",
  "Trazabilidad",
  "Usuario",
  "UsuarioBodega",
  "UsuarioFicha",
];

const tablaComponentes: Record<string, JSX.Element> = {
  Area: <TablaArea />,
  Bodegas: <TablaBodegas />,
  Centro: <TablaCentro />,
  DetalleSolicitud: <TablaDetalleSolicitud />,
  Detalle: <TablaDetalle />,
  DetalleEntrega: <TablaDetalleEntrega />,
  // Elemento: <TablaElemento />,
  // Entrada: <TablaEntrada />,
  EntregaMaterial: <TablaEntregaMaterial />,
  Ficha: <TablaFicha />,
  Movimiento: <TablaMovimiento />,
  Municipio: <TablaMunicipio />,
  Programa: <TablaPrograma />,
  Rol: <TablaRol />,
  //Salida: <TablaSalida />,
  Sede: <TablaSede />,
  Solicitud: <TablaSolicitud />,
  // Trazabilidad: <TablaTrazabilidad />,
  Usuario: <TablaUsuario />,
  UsuarioBodega: <TablaUsuarioBodega />,
  UsuarioFicha: <TablaUsuarioFicha />,
};

function AdminTables() {
  const [tablaSeleccionada, setTablaSeleccionada] = useState<string | null>(
    null
  );

  const abrirModal = (tabla: string) => {
    setTablaSeleccionada(tabla);
  };

  const cerrarModal = () => {
    setTablaSeleccionada(null);
  };

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-4">Gestión de Tablas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tablas.map((nombre) => (
          <div
            key={nombre}
            className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-gray-700">{nombre}</h2>
              <EyeIcon
                className="w-5 h-5 text-blue-600 cursor-pointer"
                onClick={() => abrirModal(nombre)}
              />
            </div>
            <p className="text-sm text-gray-500">Ver y gestionar {nombre}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Transition appear show={!!tablaSeleccionada} as="div">
        <Dialog as="div" className="relative z-50 mt-[50px] max-w-xl w-[50px] mx-auto p-4" onClose={cerrarModal}>
          <div className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl">
              <Dialog.Title className="text-xl font-bold mb-4">
                {tablaSeleccionada}
              </Dialog.Title>
              <div>{tablaSeleccionada && tablaComponentes[tablaSeleccionada]}</div>
              <div className="text-right mt-6">
                <button
                  onClick={cerrarModal}
                  className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700"
                >
                  Cerrar
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AdminTables;
