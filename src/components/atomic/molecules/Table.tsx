import { ReactNode } from "react";

interface TableProps {
  headers: string[];
  children: ReactNode;
}

export const Table = ({ headers, children }: TableProps) => (
  <div className="overflow-x-auto rounded-2xl shadow-md">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100 hidden md:table-header-group">
        <tr>
          {headers.map((header) => (
            <th key={header} className="py-3 px-6 text-left font-semibold text-gray-600">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {children}
      </tbody>
    </table>
  </div>
);
