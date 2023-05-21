import Input from "../input";
import { clsx } from "clsx";

/* eslint-disable-next-line */
export interface FormProps {
  className?: string;
}

export function Form(props: FormProps) {
  return (
    <form className={clsx(props.className, "grid grid-cols-3 gap-16")}>
      <Input label="day" placeholder="24" />
      <Input label="month" placeholder="09" />
      <Input label="year" placeholder="1984" />
    </form>
  );
}

export default Form;
