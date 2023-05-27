import Button from "../button";
import * as Styled from "./form.style";

/* eslint-disable-next-line */
export interface FormProps {}

export function Form(props: FormProps) {
  return (
    <form>
      <Styled.Input />
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}

export default Form;
