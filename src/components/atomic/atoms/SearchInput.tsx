interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
  
  export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => (
    <input
      type="text"
      className="w-full p-2 border rounded-md text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Buscar..."}
    />
  );
  