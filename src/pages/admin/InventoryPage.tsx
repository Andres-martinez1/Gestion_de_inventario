import { useState } from "react";
import { Card } from "../../components/atomic/organisms/Card";
import { Table } from "../../components/atomic/molecules/Table";
import { SearchBar } from "../../components/atomic/organisms/SearchBar";
import { InventoryRow } from "../../components/atomic/organisms/Row2";

const mockInventory = [
  { code: "MAT001", material: "Cable eléctrico", quantity: 200, category: "Eléctrico", location: "Almacén A" },
  { code: "MAT002", material: "Pintura blanca", quantity: 50, category: "Construcción", location: "Bodega Principal" },
  { code: "MAT003", material: "Tornillos", quantity: 1000, category: "Ferretería", location: "Almacén B" },
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");

  const filteredInventory = mockInventory.filter((item) =>
    item.material.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <Card title="Inventario General">
        <SearchBar placeholder="Buscar material o categoría..." onChange={setSearch} />

        <Table headers={["Código", "Material", "Cantidad", "Categoría", "Ubicación"]}>
          {filteredInventory.length > 0 ? (
            filteredInventory.map((item, index) => (
              <InventoryRow key={index} {...item} />
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                No hay materiales encontrados.
              </td>
            </tr>
          )}
        </Table>
      </Card>
    </div>
  );
}
