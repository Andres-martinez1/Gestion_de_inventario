import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useFicha } from "../../../hooks/Ficha/useFicha";
import { useMunicipios } from "../../../hooks/Municipios/useMunicipios";
import { useProgramas } from "../../../hooks/Programas/useProgramas";
import { useSedes } from "../../../hooks/Sedes/useSedes";
import { GetFicha } from "../../../types/Ficha/GetFicha";

function TablaFicha() {
  const {
    fichas = [],
    crearFicha,
    actualizarFicha,
    eliminarFicha,
  } = useFicha();

  const { municipios = [] } = useMunicipios();
  const { programas = [] } = useProgramas();
  const { sedes = [] } = useSedes();

  const [formData, setFormData] = useState<Partial<GetFicha>>({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes("fkId") ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      numeroFicha: formData.numeroFicha || "",
      fkIdMunicipio: Number(formData.fkIdMunicipio),
      fkIdPrograma: Number(formData.fkIdPrograma),
      fkIdSede: Number(formData.fkIdSede),
    };

    if (isEdit && formData.idFicha) {
      actualizarFicha.mutate({ id: formData.idFicha, data: payload });
    } else {
      crearFicha.mutate(payload);
    }

    setFormData({});
    setIsEdit(false);
  };

  const handleEdit = (ficha: GetFicha) => {
    setFormData({
      ...ficha,
      fkIdMunicipio: typeof ficha.fkIdMunicipio === "object" ? ficha.fkIdMunicipio.idMunicipio : ficha.fkIdMunicipio,
      fkIdPrograma: typeof ficha.fkIdPrograma === "object" ? ficha.fkIdPrograma.idPrograma : ficha.fkIdPrograma,
      fkIdSede: typeof ficha.fkIdSede === "object" ? ficha.fkIdSede.idSedes : ficha.fkIdSede,
    });
    setIsEdit(true);
  };

  const filteredFichas = fichas.filter((ficha) =>
    ficha.numeroFicha.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mt-[-20px]">Gestión de Fichas</h2>
        <input
          type="text"
          placeholder="Buscar por número de ficha"
          className="px-4 py-2 rounded-lg border shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-gray-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <input
            name="numeroFicha"
            value={formData.numeroFicha || ""}
            onChange={handleChange}
            placeholder="Número de Ficha"
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="fkIdMunicipio"
            value={typeof formData.fkIdMunicipio === "object" ? formData.fkIdMunicipio.idMunicipio : formData.fkIdMunicipio ?? ""}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccione un municipio</option>
            {municipios.map((m) => (
              <option key={m.idMunicipio} value={m.idMunicipio}>
                {m.nombreMunicipio}
              </option>
            ))}
          </select>

          <select
            name="fkIdPrograma"
            value={typeof formData.fkIdPrograma === "object" ? formData.fkIdPrograma.idPrograma : formData.fkIdPrograma ?? ""}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccione un programa</option>
            {programas.map((p) => (
              <option key={p.idPrograma} value={p.idPrograma}>
                {p.nombrePrograma}
              </option>
            ))}
          </select>

          <select
            name="fkIdSede"
            value={typeof formData.fkIdSede === "object" ? formData.fkIdSede.idSedes : formData.fkIdSede ?? ""}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccione una sede</option>
            {sedes.map((s) => (
              <option key={s.idSedes} value={s.idSedes}>
                {s.nombreSede}
              </option>
            ))}
          </select>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-[5px] hover:bg-gray-800 transition"
          >
            {isEdit ? "Actualizar Ficha" : "Crear Ficha"}
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Número</th>
              <th className="px-4 py-3">Municipio</th>
              <th className="px-4 py-3">Programa</th>
              <th className="px-4 py-3">Sede</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredFichas.map((ficha) => (
              <tr key={ficha.idFicha} className="hover:bg-gray-100">
                <td className="px-4 py-2">{ficha.idFicha}</td>
                <td className="px-4 py-2">{ficha.numeroFicha}</td>
                <td className="px-4 py-2">
                  {typeof ficha.fkIdMunicipio === "object"
                    ? ficha.fkIdMunicipio.nombreMunicipio
                    : ficha.fkIdMunicipio}
                </td>
                <td className="px-4 py-2">
                  {typeof ficha.fkIdPrograma === "object"
                    ? ficha.fkIdPrograma.nombrePrograma
                    : ficha.fkIdPrograma}
                </td>
                <td className="px-4 py-2">
                  {typeof ficha.fkIdSede === "object"
                    ? ficha.fkIdSede.nombreSede
                    : ficha.fkIdSede}
                </td>
                <td className="px-4 py-2 flex gap-4">
                  <div className="relative group">
                    <PencilIcon
                      className="w-5 h-5 text-yellow-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEdit(ficha)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Editar
                    </span>
                  </div>
                  <div className="relative group">
                    <TrashIcon
                      className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => eliminarFicha.mutate(ficha.idFicha)}
                    />
                    <span className="absolute text-xs bg-black text-white px-2 py-1 rounded bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Eliminar
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {filteredFichas.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                  No hay fichas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaFicha;
