import { IconArrow } from "../icon";
import { clsx } from "clsx";

/* eslint-disable-next-line */
export interface SeparatorProps {
  className?: string;
}

export function Separator(props: SeparatorProps) {
  return (
    <div
      className={clsx(props.className, "relative flex flex-row justify-center")}
    >
      <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-light-grey"></div>
      <div className="relative z-20 flex justify-center items-center w-64 h-64 rounded-full bg-purple">
        <IconArrow className="w-24 h-24" />
      </div>
    </div>
  );
}

export default Separator;
