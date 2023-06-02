import clsx from "clsx";
import MetricForm from "../metric-form";
import { useEffect, useState } from "react";
import ImperialForm from "../imperial-form";
import Result from "../result";
import TypeForm from "../type-form";

export interface BmiProps {
  className?: string;
}

export function Bmi(props: BmiProps) {
  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [centimeters, setCentimeters] = useState<string>("");
  const [kilograms, setKilograms] = useState<string>("");
  const [feets, setFeets] = useState<string>("");
  const [inches, setInches] = useState<string>("");
  const [stones, setStones] = useState<string>("");
  const [pounds, setPounds] = useState<string>("");

  useEffect(() => {
    if (isMetric) {
      setFeets("");
      setInches("");
      setStones("");
      setPounds("");
    } else {
      setCentimeters("");
      setKilograms("");
    }
  }, [isMetric]);

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
        <MetricForm
          className="mb-24 md:mb-32"
          setCentimeters={setCentimeters}
          setKilograms={setKilograms}
        />
      ) : (
        <ImperialForm
          className="mb-24 md:mb-32"
          setFeets={setFeets}
          setInches={setInches}
          setStones={setStones}
          setPounds={setPounds}
        />
      )}
      <Result
        centimeters={centimeters}
        kilograms={kilograms}
        feets={feets}
        inches={inches}
        stones={stones}
        pounds={pounds}
        isMetric={isMetric}
      />
    </div>
  );
}

export default Bmi;
