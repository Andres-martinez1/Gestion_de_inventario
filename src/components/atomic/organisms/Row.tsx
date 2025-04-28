interface MovementRowProps {
    material: string;
    movementType: string;
    quantity: number;
    date: string;
    location: string;
  }
  
  export const MovementRow = ({ material, movementType, quantity, date, location }: MovementRowProps) => (
    <tr>
      <td className="py-3 px-6">{material}</td>
      <td className="py-3 px-6">{movementType}</td>
      <td className="py-3 px-6">{quantity}</td>
      <td className="py-3 px-6">{date}</td>
      <td className="py-3 px-6">{location}</td>
    </tr>
  );
  