import * as Styled from "./button.style";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: string;
  fullWidth: boolean;
}

const Button = ({ children, variant, fullWidth }: ButtonProps) => {
  return <Styled.Button $variant={variant} $fullWidth={fullWidth}>{children}</Styled.Button>;
};

export default Button;
