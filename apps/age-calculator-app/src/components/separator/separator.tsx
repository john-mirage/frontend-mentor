import { ReactElement } from "react";
import { clsx } from "clsx";

/* eslint-disable-next-line */
export interface SeparatorProps {
  children: ReactElement;
  className?: string;
}

export function Separator(props: SeparatorProps) {
  return (
    <div
      className={clsx(props.className, "relative flex flex-row justify-center")}
    >
      <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-light-grey"></div>
      <div className="relative z-20">{props.children}</div>
    </div>
  );
}

export default Separator;
