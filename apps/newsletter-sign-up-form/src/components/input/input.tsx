import * as Styled from "./input.style";

/* eslint-disable-next-line */
export interface InputProps {
  className?: string;
}

export function Input(props: InputProps) {
  return (
    <Styled.Container className={props.className}>
      <Styled.Label>Email address</Styled.Label>
      <Styled.Input type="text" placeholder="email@company.com" />
    </Styled.Container>
  );
}

export default Input;
