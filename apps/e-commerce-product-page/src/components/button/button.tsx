import * as Styled from "./button.style";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  action?: () => void;
  children?: ReactNode;
  label: string;
}

const Button = ({ className, action, children, label }: ButtonProps) => {
  return (
    <Styled.Container className={className} onClick={action}>
      {children}
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};

export default Button;
