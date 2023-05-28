import { IconArrow } from "../icons";

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="relative z-20 flex justify-center items-center w-64 h-64 rounded-full bg-purple transition-colors focus-visible:outline-offset-8 focus-visible:outline-purple hover-device:hover:bg-off-black @2xl:w-96 @2xl:h-96"
    >
      <IconArrow className="w-24 h-24 @2xl:w-44 @2xl:h-44" />
    </button>
  );
}

export default Button;
