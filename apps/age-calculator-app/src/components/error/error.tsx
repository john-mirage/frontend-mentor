import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface ErrorProps {
  children: ReactNode;
}

export function Error({ children }: ErrorProps) {
  return (
    <p className="mt-4 text-body-md text-light-red italic @2xl:mt-8 @2xl:text-body-lg">
      {children}
    </p>
  );
}

export default Error;
