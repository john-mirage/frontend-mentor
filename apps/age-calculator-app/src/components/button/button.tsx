import { IconArrow } from "../icon";

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="flex justify-center items-center w-64 h-64 rounded-full bg-purple"
    >
      <IconArrow className="w-24 h-24" />
    </button>
  );
}

export default Button;
