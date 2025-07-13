// import { useState } from "react";
// import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
// import { useTrazabilidad } from "../../../hooks/Trazabilidad/useTrazabilidad";
// import { GetTrazabilidad } from "../../../types/Trazabilidad/GetTrazabilidad";

// function TablaTrazabilidad() {
//   const {
//     trazabilidad,
//     crearTrazabilidad,
//     actualizarTrazabilidad,
//     eliminarTrazabilidad,
//   } = useTrazabilidad();

//   const [formData, setFormData] = useState<Partial<GetTrazabilidad>>({});
//   const [isEdit, setIsEdit] = useState(false);
//   const [search, setSearch] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const payload = {
//       tipoMovimiento: formData.tipoMovimiento || "",
//       fecha: formData.fecha,
//       estadoActual: formData.estadoActual || "",
//       bodegaOrigen: formData.bodegaOrigen || "",
//       bodegaDestino: formData.bodegaDestino || "",
//       fkIdElemento: Number(formData.fkIdElemento),
//     };

//     if (isEdit && formData.idTrazabilidad) {
//       actualizarTrazabilidad.mutate({ id: formData.idTrazabilidad, data: payload });
//     } else {
//       crearTrazabilidad.mutate(payload);
//     }

//     setFormData({});
//     setIsEdit(false);
//   };

//   const handleEdit = (traza: GetTrazabilidad) => {
//     setFormData(traza);
//     setIsEdit(true);
//   };

//   const filteredTrazabilidad = trazabilidad.filter((t) =>
//     t.tipoMovimiento.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4 space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Trazabilidad</h2>
//         <input
//           type="text"
//           placeholder="Buscar por tipo de movimiento"
//           className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Formulario */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Tipo de Movimiento</label>
//             <input
//               name="tipoMovimiento"
//               value={formData.tipoMovimiento || ""}
//               onChange={handleChange}
//               placeholder="Tipo de Movimiento"
//               className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Fecha</label>
//             <input
//               name="fecha"
//               type="date"
//               value={
//                 formData.fecha
//                   ? new Date(formData.fecha).toISOString().split("T")[0]
//                   : ""
//               }
//               onChange={handleChange}
//               className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Estado Actual</label>
//             <input
//               name="estadoActual"
//               value={formData.estadoActual || ""}
//               onChange={handleChange}
//               placeholder="Estado Actual"
//               className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Bodega Origen</label>
//             <input
//               name="bodegaOrigen"
//               value={formData.bodegaOrigen || ""}
//               onChange={handleChange}
//               placeholder="Bodega Origen"
//               className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Bodega Destino</label>
//             <input
//               name="bodegaDestino"
//               value={formData.bodegaDestino || ""}
//               onChange={handleChange}
//               placeholder="Bodega Destino"
//               className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">ID Elemento</label>
//             <input
//               name="fkIdElemento"
//               type="number"
//               value={formData.fkIdElemento || ""}
//               onChange={handleChange}
//               placeholder="ID Elemento"
//               className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>
//         <div className="text-right">
//           <button
//             type="submit"
//             className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
//           >
//             {isEdit ? "Actualizar Trazabilidad" : "Crear Trazabilidad"}
//           </button>
//         </div>
//       </form>

//       {/* Tabla */}
//       <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-900 text-white">
//             <tr>
//               <th className="px-4 py-3">#</th>
//               <th className="px-4 py-3">Movimiento</th>
//               <th className="px-4 py-3">Fecha</th>
//               <th className="px-4 py-3">Estado</th>
//               <th className="px-4 py-3">Origen</th>
//               <th className="px-4 py-3">Destino</th>
//               <th className="px-4 py-3">Elemento</th>
//               <th className="px-4 py-3">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTrazabilidad.map((traza) => (
//               <tr key={traza.idTrazabilidad} className="hover:bg-gray-200">
//                 <td className="px-4 py-3">{traza.idTrazabilidad}</td>
//                 <td className="px-4 py-3">{traza.tipoMovimiento}</td>
//                 <td className="px-4 py-3">{new Date(traza.fecha).toLocaleDateString()}</td>
//                 <td className="px-4 py-3">{traza.estadoActual}</td>
//                 <td className="px-4 py-3">{traza.bodegaOrigen}</td>
//                 <td className="px-4 py-3">{traza.bodegaDestino}</td>
//                 <td className="px-4 py-3">{traza.fkIdElemento}</td>
//                 <td className="px-4 py-3 flex gap-2">
//                   <div className="relative group">
//                     <PencilIcon
//                       className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
//                       onClick={() => handleEdit(traza)}
//                     />
//                     <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
//                       Editar
//                     </span>
//                   </div>
//                   <div className="relative group">
//                     <TrashIcon
//                       className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
//                       onClick={() => eliminarTrazabilidad.mutate(traza.idTrazabilidad)}
//                     />
//                     <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
//                       Eliminar
//                     </span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             {filteredTrazabilidad.length === 0 && (
//               <tr>
//                 <td colSpan={8} className="px-4 py-4 text-center text-gray-500">
//                   No hay registros de trazabilidad.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TablaTrazabilidad;
