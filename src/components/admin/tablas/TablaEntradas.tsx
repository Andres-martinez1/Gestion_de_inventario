// import { useState } from "react";
// import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
// import { useEntradas } from "../../../hooks/Entradas/useEntradas";
// import { GetEntrada } from "../../../types/Entradas/GetEntrada";

// function TablaEntradas() {
//   const {
//     entradas = [],
//     crearEntrada,
//     actualizarEntrada,
//     eliminarEntrada,
//   } = useEntradas();

//   const [formData, setFormData] = useState<Partial<GetEntrada>>({});
//   const [isEdit, setIsEdit] = useState(false);
//   const [search, setSearch] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: ["cantidadIngresada", "fkIdBodega", "fkIdElemento"].includes(name)
//         ? Number(value)
//         : value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const payload = {
//       cantidadIngresada: Number(formData.cantidadIngresada),
//       proveedor: formData.proveedor || "",
//       fechaIngreso: formData.fechaIngreso,
//       fkIdBodega: Number(formData.fkIdBodega),
//       fkIdElemento: Number(formData.fkIdElemento),
//     };

//     if (isEdit && formData.idEntrada) {
//       actualizarEntrada.mutate({ id: formData.idEntrada, data: payload });
//     } else {
//       crearEntrada.mutate(payload);
//     }

//     setFormData({});
//     setIsEdit(false);
//   };

//   const handleEdit = (entrada: GetEntrada) => {
//     setFormData({
//       ...entrada,
//       fechaIngreso: entrada.fechaIngreso?.toString().split("T")[0],
//     });
//     setIsEdit(true);
//   };

//   const filteredEntradas = entradas.filter((entrada) =>
//     entrada.proveedor.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4 space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Entradas</h2>
//         <input
//           type="text"
//           placeholder="Buscar por proveedor"
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
//         <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//           <input
//             name="cantidadIngresada"
//             type="number"
//             value={formData.cantidadIngresada || ""}
//             onChange={handleChange}
//             placeholder="Cantidad Ingresada"
//             className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="proveedor"
//             value={formData.proveedor || ""}
//             onChange={handleChange}
//             placeholder="Proveedor"
//             className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="fechaIngreso"
//             type="date"
//             value={
//               formData.fechaIngreso
//                 ? formData.fechaIngreso.toString().split("T")[0]
//                 : ""
//             }
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="fkIdBodega"
//             type="number"
//             value={formData.fkIdBodega || ""}
//             onChange={handleChange}
//             placeholder="ID Bodega"
//             className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="fkIdElemento"
//             type="number"
//             value={formData.fkIdElemento || ""}
//             onChange={handleChange}
//             placeholder="ID Elemento"
//             className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="text-right">
//           <button
//             type="submit"
//             className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
//           >
//             {isEdit ? "Actualizar Entrada" : "Crear Entrada"}
//           </button>
//         </div>
//       </form>

//       {/* Tabla */}
//       <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-900 text-white">
//             <tr>
//               <th className="px-4 py-3">#</th>
//               <th className="px-4 py-3">Cantidad</th>
//               <th className="px-4 py-3">Proveedor</th>
//               <th className="px-4 py-3">Fecha</th>
//               <th className="px-4 py-3">Bodega</th>
//               <th className="px-4 py-3">Elemento</th>
//               <th className="px-4 py-3">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEntradas.map((entrada) => (
//               <tr key={entrada.idEntrada} className="hover:bg-gray-100">
//                 <td className="px-4 py-2">{entrada.idEntrada}</td>
//                 <td className="px-4 py-2">{entrada.cantidadIngresada}</td>
//                 <td className="px-4 py-2">{entrada.proveedor}</td>
//                 <td className="px-4 py-2">
//                   {new Date(entrada.fechaIngreso).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-2">{entrada.fkIdBodega}</td>
//                 <td className="px-4 py-2">{entrada.fkIdElemento}</td>
//                 <td className="px-4 py-2 flex gap-2">
//                   <div className="relative group">
//                     <PencilIcon
//                       className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
//                       onClick={() => handleEdit(entrada)}
//                     />
//                     <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
//                       Editar
//                     </span>
//                   </div>
//                   <div className="relative group">
//                     <TrashIcon
//                       className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
//                       onClick={() => eliminarEntrada.mutate(entrada.idEntrada)}
//                     />
//                     <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
//                       Eliminar
//                     </span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             {filteredEntradas.length === 0 && (
//               <tr>
//                 <td colSpan={7} className="px-4 py-4 text-center text-gray-500">
//                   No hay entradas registradas.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TablaEntradas;
