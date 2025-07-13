// import { useState } from "react";
// import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
// import { useElementos } from "../../../hooks/Elementos/useElementos";
// import { GetElemento } from "../../../types/Elementos/GetElemento";
// import { useBodegas } from "../../../hooks/Bodegas/useBodegas";

// function TablaElemento() {
//   const {
//     elementos = [],
//     crearElemento,
//     actualizarElemento,
//     eliminarElemento,
//   } = useElementos();

//   const { bodegas } = useBodegas();

//   const [formData, setFormData] = useState<Partial<GetElemento>>({});
//   const [isEdit, setIsEdit] = useState(false);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 4;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const payload = {
//       nombreElemento: formData.nombreElemento || "",
//       stock: Number(formData.stock),
//       clasificacion: formData.clasificacion || "",
//       estado: formData.estado || "",
//       fkIdBodega: Number(formData.fkIdBodega),
//       serial: formData.serial || "",
//       fechaIngreso: formData.fechaIngreso ? new Date(formData.fechaIngreso) : null,
//       fechaCaducidad: formData.fechaCaducidad ? new Date(formData.fechaCaducidad) : null,
//     };

//     if (isEdit && formData.idElemento) {
//       actualizarElemento.mutate({ id: formData.idElemento, data: payload });
//     } else {
//       crearElemento.mutate(payload);
//     }

//     setFormData({});
//     setIsEdit(false);
//   };

//   const handleEdit = (elemento: GetElemento) => {
//     setFormData({
//       ...elemento,
//       fechaIngreso: elemento.fechaIngreso?.toString().split("T")[0],
//       fechaCaducidad: elemento.fechaCaducidad?.toString().split("T")[0],
//     });
//     setIsEdit(true);
//   };

//   const filteredElementos = elementos.filter((e) =>
//     e.nombreElemento.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredElementos.length / itemsPerPage);
//   const paginatedElementos = filteredElementos.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Elementos</h2>
//         <input
//           type="text"
//           placeholder="Buscar por nombre"
//           className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <input
//             name="nombreElemento"
//             value={formData.nombreElemento || ""}
//             onChange={handleChange}
//             placeholder="Nombre del Elemento"
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="stock"
//             type="number"
//             value={formData.stock || ""}
//             onChange={handleChange}
//             placeholder="Stock"
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="clasificacion"
//             value={formData.clasificacion || ""}
//             onChange={handleChange}
//             placeholder="Clasificación"
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="estado"
//             value={formData.estado || ""}
//             onChange={handleChange}
//             placeholder="Estado"
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <select
//             name="fkIdBodega"
//             value={formData.fkIdBodega || ""}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Selecciona una bodega</option>
//             {bodegas.map((bodega: any) => (
//               <option key={bodega.idBodega} value={bodega.idBodega}>
//                 {bodega.nombreBodega}
//               </option>
//             ))}
//           </select>
//           <input
//             name="serial"
//             value={formData.serial || ""}
//             onChange={handleChange}
//             placeholder="Serial"
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="fechaIngreso"
//             type="date"
//             value={formData.fechaIngreso || ""}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="fechaCaducidad"
//             type="date"
//             value={formData.fechaCaducidad || ""}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="text-right">
//           <button
//             type="submit"
//             className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
//           >
//             {isEdit ? "Actualizar Elemento" : "Crear Elemento"}
//           </button>
//         </div>
//       </form>

//       <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-900 text-white">
//             <tr>
//               <th className="px-4 py-3">ID</th>
//               <th className="px-4 py-3">Nombre</th>
//               <th className="px-4 py-3">Stock</th>
//               <th className="px-4 py-3">Clasificación</th>
//               <th className="px-4 py-3">Serial</th>
//               <th className="px-4 py-3">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedElementos.map((e) => (
//               <tr key={e.idElemento} className="hover:bg-gray-100">
//                 <td className="px-4 py-2">{e.idElemento}</td>
//                 <td className="px-4 py-2">{e.nombreElemento}</td>
//                 <td className="px-4 py-2">{e.stock}</td>
//                 <td className="px-4 py-2">{e.clasificacion}</td>
//                 <td className="px-4 py-2">{e.serial}</td>
//                 <td className="px-4 py-2 flex gap-2">
//                   <div className="relative group">
//                     <PencilIcon
//                       className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
//                       onClick={() => handleEdit(e)}
//                     />
//                     <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
//                       Editar
//                     </span>
//                   </div>
//                   <div className="relative group">
//                     <TrashIcon
//                       className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
//                       onClick={() => eliminarElemento.mutate(e.idElemento)}
//                     />
//                     <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100">
//                       Eliminar
//                     </span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             {paginatedElementos.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={6}
//                   className="px-4 py-4 text-center text-gray-500"
//                 >
//                   No hay elementos registrados.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-2 mt-4">
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
//           >
//             Anterior
//           </button>
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goToPage(i + 1)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === i + 1
//                   ? "bg-gray-800 text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
//           >
//             Siguiente
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TablaElemento;
