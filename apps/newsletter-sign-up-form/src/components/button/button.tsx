import { ReactNode } from "react";
import * as Styled from "./button.style";

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return <Styled.Button>{props.children}</Styled.Button>;
}

export default Button;
