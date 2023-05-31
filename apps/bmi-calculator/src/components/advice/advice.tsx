import { ReactNode } from "react";
/* eslint-disable-next-line */
export interface AdviceProps {
  name: string;
  description: string;
  icon: ReactNode;
}

export function Advice(props: AdviceProps) {
  return (
    <li className="md:flex md:flex-row md:items-center md:gap-40 lg:block">
      {props.icon}
      <div className="md:flex-1">
        <h3 className="mb-24 text-heading-m text-gun-metal">{props.name}</h3>
        <p className="text-body-m text-dark-electric-blue">
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default Advice;
