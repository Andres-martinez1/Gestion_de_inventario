interface InventoryRowProps {
    code: string;
    material: string;
    quantity: number;
    category: string;
    location: string;
  }
  
  export const InventoryRow = ({ code, material, quantity, category, location }: InventoryRowProps) => (
    <tr>
      <td className="py-3 px-6">{code}</td>
      <td className="py-3 px-6">{material}</td>
      <td className="py-3 px-6">{quantity}</td>
      <td className="py-3 px-6">{category}</td>
      <td className="py-3 px-6">{location}</td>
    </tr>
  );
  