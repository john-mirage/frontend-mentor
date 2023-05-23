import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface ErrorProps {
  children: ReactNode;
}

export function Error(props: ErrorProps) {
  return (
    <p className="mt-4 text-body-sm text-light-red italic">{props.children}</p>
  );
}

export default Error;
