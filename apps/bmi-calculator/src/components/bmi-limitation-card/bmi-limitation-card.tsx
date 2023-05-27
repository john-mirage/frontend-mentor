import clsx from "clsx";
import { ReactNode } from "react";

export interface BmiLimitationCardProps {
  className?: string;
  name: string;
  description: string;
  icon: ReactNode;
}

export function BmiLimitationCard(props: BmiLimitationCardProps) {
  return (
    <li
      className={clsx(
        props.className,
        "w-full bg-pure-white p-24 rounded-16 shadow-form"
      )}
    >
      <div className="mb-16 flex flex-row items-center gap-16">
        {props.icon}
        <h3 className="text-heading-s text-gun-metal">{props.name}</h3>
      </div>
      <p className="text-body-m text-dark-electric-blue">{props.description}</p>
    </li>
  );
}

export default BmiLimitationCard;
