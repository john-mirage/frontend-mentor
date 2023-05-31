import clsx from "clsx";
import Input from "../input";
import { useEffect, useState } from "react";

/* eslint-disable-next-line */
export interface MetricFormProps {
  className?: string;
  setBmi: (bmi: number) => void;
}

export function MetricForm({ className, setBmi }: MetricFormProps) {
  const [centimeters, setCentimeters] = useState<number>(0);
  const [kilograms, setKilograms] = useState<number>(0);

  useEffect(() => {
    if (centimeters > 0 && kilograms > 0) {
      const meters = centimeters / 100;
      const squaredMeters = meters * meters;
      setBmi(Math.round(kilograms / squaredMeters));
    }
  }, [centimeters, kilograms, setBmi]);

  return (
    <form
      className={clsx(className, "grid grid-cols-2 gap-16 items-end lg:gap-24")}
    >
      <Input
        label="Height"
        labelIsVisible={true}
        unit="cm"
        value={centimeters}
        minValue={1}
        onChange={setCentimeters}
        formatOptions={{
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }}
      />
      <Input
        label="Weight"
        labelIsVisible={true}
        unit="kg"
        value={kilograms}
        minValue={1}
        onChange={setKilograms}
        formatOptions={{
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }}
      />
    </form>
  );
}

export default MetricForm;
