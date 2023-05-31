import clsx from "clsx";
import MetricForm from "../metric-form";
import { useState } from "react";
import ImperialForm from "../imperial-form";
import Result from "../result";
import TypeForm from "../type-form";

/* eslint-disable-next-line */
export interface BmiProps {
  className?: string;
}

export function Bmi(props: BmiProps) {
  const [isMetric, setIsMetric] = useState<boolean>(true);

  return (
    <div
      className={clsx(
        props.className,
        "rounded-16 p-24 bg-pure-white shadow-form md:p-32"
      )}
    >
      <h2 className="mb-24 text-heading-m text-gun-metal md:mb-32">
        Enter your details below
      </h2>
      <TypeForm
        className="mb-24 md:mb-32"
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
      {isMetric ? (
        <MetricForm className="mb-24 md:mb-32" />
      ) : (
        <ImperialForm className="mb-24 md:mb-32" />
      )}
      <Result />
    </div>
  );
}

export default Bmi;
