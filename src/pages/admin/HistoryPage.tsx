import { useState } from "react";
import { Card } from "../../components/atomic/organisms/Card";
import { Table } from "../../components/atomic/molecules/Table";
import { SearchBar } from "../../components/atomic/organisms/SearchBar";
import { MovementRow } from '../../components/atomic/organisms/Row';

const mockMovements = [
  {
    material: "Cable eléctrico",
    movementType: "Entrada",
    quantity: 50,
    date: "2025-04-26",
    location: "Electricidad",
  },
  {
    material: "Portatil",
    movementType: "Entrada",
    quantity: 100,
    date: "2025-04-25",
    location: "TIC",
  },
  {
    material: "Cables",
    movementType: "Entrada",
    quantity: 20,
    date: "2025-04-24",
    location: "TIC",
  },
];

export default function MovementHistoryPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const filteredMovements = mockMovements.filter((m) =>
    m.material.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovements.length / itemsPerPage);

  const currentMovements = filteredMovements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-8">
      <Card title="Historial de Movimientos">
        <SearchBar
          placeholder="Buscar material..."
          onChange={(value) => {
            setSearch(value);
            setCurrentPage(1); //Reiniciar a página 1 cuando buscas
          }}
        />

        <Table
          headers={["Material", "Movimiento", "Cantidad", "Fecha", "Ubicación"]}
        >
          {currentMovements.length > 0 ? (
            currentMovements.map((movement, index) => (
              <MovementRow key={index} {...movement} />
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                No hay movimientos encontrados.
              </td>
            </tr>
          )}
        </Table>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Anterior
          </button>

          <span className="text-primary-700">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-primary-400 text-white rounded-lg disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </Card>
    </div>
  );
}
