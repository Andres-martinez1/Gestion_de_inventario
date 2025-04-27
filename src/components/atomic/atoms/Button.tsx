// components/atoms/Button.tsx
import { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
  >
    {children}
  </button>
);

export default Button;
