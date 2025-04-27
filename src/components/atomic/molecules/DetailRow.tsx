// components/molecules/DetailRow.tsx
import { FC } from "react";

interface Props {
  label: string;
  value: string;
}

const DetailRow: FC<Props> = ({ label, value }) => (
  <div className="flex justify-between border-b py-2">
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

export default DetailRow;
