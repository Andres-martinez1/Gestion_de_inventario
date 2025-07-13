// import { useState } from "react";
// import { Eye, Edit, Trash2, Plus } from "lucide-react";
// import { Dialog } from "@headlessui/react";
// import clsx from "clsx";

// const movimientos = [
//   {
//     id: 1,
//     tipo: "Entrada",
//     producto: "Tractor Compacto",
//     cantidad: 5,
//     bodega: "Agropecuaria",
//     estado: "Completado",
//     fecha: "2023-12-15",
//     referencia: "ENT-2023-001",
//     usuario: "Michael Johnson",
//     observaciones: "Compra directa del proveedor",
//   },
//   {
//     id: 2,
//     tipo: "Salida",
//     producto: "Sistema de Riego",
//     cantidad: 3,
//     bodega: "Agropecuaria",
//     estado: "En Proceso",
//     fecha: "2023-12-14",
//     referencia: "SAL-2023-002",
//     usuario: "Pedro Gómez",
//     observaciones: "Mantenimiento externo",
//   },
// ];

// const solicitudes = [
//   {
//     id: 1,
//     producto: "Tractor Compacto",
//     solicitante: "Juan Pérez",
//     departamento: "Agricultura",
//     cantidad: 1,
//     fechaSolicitud: "2023-12-15",
//     fechaDevolucion: "2023-12-20",
//     estado: "Aprobado",
//   },
// ];

// export default function AdminMovimientos() {
//   const [tab, setTab] = useState<"movimientos" | "solicitudes">("movimientos");
//   const [selectedItem, setSelectedItem] = useState<any>(null);
//   const [modalDetalle, setModalDetalle] = useState(false);
//   const [modalEditar, setModalEditar] = useState(false);

//   const badgeEstado = (estado: string) => {
//     const colors: any = {
//       Completado: "bg-green-100 text-green-700",
//       "En Proceso": "bg-yellow-100 text-yellow-700",
//       Pendiente: "bg-yellow-100 text-yellow-700",
//       "En Préstamo": "bg-yellow-100 text-yellow-700",
//       Aprobado: "bg-green-100 text-green-700",
//     };
//     return (
//       <span
//         className={clsx(
//           "text-sm font-medium px-3 py-1 rounded-full",
//           colors[estado] || "bg-gray-100 text-gray-700"
//         )}
//       >
//         {estado}
//       </span>
//     );
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">Gestión de Movimientos</h1>
//           <p className="text-gray-500">Controla movimientos y solicitudes de inventario</p>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-890 transition">
//             <Plus className="w-4 h-4" />
//             Nuevo Movimiento
//           </button>
//         </div>
//       </div>

//       <div className="mb-4 flex gap-2">
//         <button
//           onClick={() => setTab("movimientos")}
//           className={clsx(
//             "px-4 py-2 rounded-full font-medium text-sm transition",
//             tab === "movimientos"
//               ? "bg-gray-900 text-white"
//               : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//           )}
//         >
//           Movimientos
//         </button>
//         <button
//           onClick={() => setTab("solicitudes")}
//           className={clsx(
//             "px-4 py-2 rounded-full font-medium text-sm transition",
//             tab === "solicitudes"
//               ? "bg-gray-900 text-white"
//               : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//           )}
//         >
//           Solicitudes
//         </button>
//       </div>

//       <div className="bg-white border rounded-lg overflow-hidden">
//         <table className="w-full table-auto text-sm">
//           <thead className="bg-gray-900 text-white">
//             <tr>
//               {tab === "movimientos" ? (
//                 <>
//                   <th className="px-4 py-3 text-left">Tipo</th>
//                   <th className="px-4 py-3 text-left">Producto</th>
//                   <th className="px-4 py-3 text-left">Cantidad</th>
//                   <th className="px-4 py-3 text-left">Bodega</th>
//                   <th className="px-4 py-3 text-left">Estado</th>
//                   <th className="px-4 py-3 text-left">Fecha</th>
//                   <th className="px-4 py-3 text-left">Acciones</th>
//                 </>
//               ) : (
//                 <>
//                   <th className="px-4 py-3 text-left">Producto</th>
//                   <th className="px-4 py-3 text-left">Solicitante</th>
//                   <th className="px-4 py-3 text-left">Departamento</th>
//                   <th className="px-4 py-3 text-left">Cantidad</th>
//                   <th className="px-4 py-3 text-left">F. Solicitud</th>
//                   <th className="px-4 py-3 text-left">F. Devolución</th>
//                   <th className="px-4 py-3 text-left">Estado</th>
//                   <th className="px-4 py-3 text-left">Acciones</th>
//                 </>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {(tab === "movimientos" ? movimientos : solicitudes).map((item) => (
//               <tr key={item.id} className="border-t hover:bg-gray-50">
//                 {tab === "movimientos" ? (
//                   <>
//                     <td className="px-4 py-3">
//                       <span
//                         className={clsx(
//                           "px-3 py-1 rounded-full text-sm font-medium",
//                           item.tipo === "Entrada"
//                             ? "bg-green-100 text-green-700"
//                             : item.tipo === "Salida"
//                             ? "bg-red-100 text-red-700"
//                             : "bg-blue-100 text-blue-700"
//                         )}
//                       >
//                         {item.tipo}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3">{item.producto}</td>
//                     <td className="px-4 py-3">{item.cantidad}</td>
//                     <td className="px-4 py-3">{item.bodega}</td>
//                     <td className="px-4 py-3">{badgeEstado(item.estado)}</td>
//                     <td className="px-4 py-3">{item.fecha}</td>
//                     <td className="px-4 py-3 flex gap-2">
//                       <button onClick={() => { setSelectedItem(item); setModalDetalle(true); }}>
//                         <Eye className="w-4 h-4 text-gray-600 hover:text-black" />
//                       </button>
//                       <button onClick={() => { setSelectedItem(item); setModalEditar(true); }}>
//                         <Edit className="w-4 h-4 text-gray-600 hover:text-black" />
//                       </button>
//                       <button>
//                         <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700" />
//                       </button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td className="px-4 py-3">{item.producto}</td>
//                     <td className="px-4 py-3">{item.solicitante}</td>
//                     <td className="px-4 py-3">{item.departamento}</td>
//                     <td className="px-4 py-3">{item.cantidad}</td>
//                     <td className="px-4 py-3">{item.fechaSolicitud}</td>
//                     <td className="px-4 py-3">{item.fechaDevolucion}</td>
//                     <td className="px-4 py-3">{badgeEstado(item.estado)}</td>
//                     <td className="px-4 py-3 flex gap-2">
//                       <button onClick={() => { setSelectedItem(item); setModalDetalle(true); }}>
//                         <Eye className="w-4 h-4 text-gray-600 hover:text-black" />
//                       </button>
//                       <button>
//                         <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700" />
//                       </button>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal de Detalle */}
//       <Dialog open={modalDetalle} onClose={() => setModalDetalle(false)} className="fixed z-50 inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl">
//           <Dialog.Title className="text-xl font-bold mb-4">Detalle del Movimiento</Dialog.Title>
//           {selectedItem && (
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span className="font-semibold">Tipo:</span>
//                 <span>{selectedItem.tipo}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Estado:</span>
//                 <span>{selectedItem.estado}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Producto:</span>
//                 <span>{selectedItem.producto}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Cantidad:</span>
//                 <span>{selectedItem.cantidad}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Bodega:</span>
//                 <span>{selectedItem.bodega}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Referencia:</span>
//                 <span>{selectedItem.referencia}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Usuario:</span>
//                 <span>{selectedItem.usuario}</span>
//               </div>
//               <div className="mt-4">
//                 <span className="font-semibold">Observaciones:</span>
//                 <p className="text-gray-700">{selectedItem.observaciones}</p>
//               </div>
//               <div className="flex justify-end mt-4">
//                 <button
//                   onClick={() => setModalDetalle(false)}
//                   className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
//                 >
//                   Cerrar
//                 </button>
//               </div>
//             </div>
//           )}
//         </Dialog.Panel>
//       </Dialog>

//       {/* Modal Editar (puedes expandirlo) */}
//       <Dialog open={modalEditar} onClose={() => setModalEditar(false)} className="fixed z-50 inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl">
//           <Dialog.Title className="text-xl font-bold mb-4">Editar Movimiento</Dialog.Title>
//           <form className="space-y-4">
//             <input className="w-full border p-2 rounded" placeholder="Tipo" defaultValue={selectedItem?.tipo} />
//             <input className="w-full border p-2 rounded" placeholder="Estado" defaultValue={selectedItem?.estado} />
//             <input className="w-full border p-2 rounded" placeholder="Cantidad" defaultValue={selectedItem?.cantidad} />
//             <input className="w-full border p-2 rounded" placeholder="Referencia" defaultValue={selectedItem?.referencia} />
//             <textarea className="w-full border p-2 rounded" placeholder="Observaciones" defaultValue={selectedItem?.observaciones}></textarea>
//             <div className="flex justify-end gap-2">
//               <button type="button" onClick={() => setModalEditar(false)} className="px-4 py-2 rounded bg-gray-200 text-gray-800">
//                 Cancelar
//               </button>
//               <button type="submit" className="px-4 py-2 rounded bg-black text-white">
//                 Guardar Cambios
//               </button>
//             </div>
//           </form>
//         </Dialog.Panel>
//       </Dialog>
//     </div>
//   );
// }
