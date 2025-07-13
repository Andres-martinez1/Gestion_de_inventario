import { Button, ButtonProps } from "@heroui/react";
import { ReactNode } from "react";

interface BotonProps extends ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  color: "danger"|"primary"
}

const Ejemplo = ({ children = "Click", ...props }: BotonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default Ejemplo;
