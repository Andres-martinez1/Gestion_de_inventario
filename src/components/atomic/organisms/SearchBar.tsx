import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  placeholder?: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar...", onChange }: SearchBarProps) => (
  <div className="flex items-center gap-2 mb-4">
    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>
);
