import Radio from "../radio";
import clsx from "clsx";

/* eslint-disable-next-line */
export interface TypeFormProps {
  className?: string;
  isMetric: boolean;
  setIsMetric: (isMetric: boolean) => void;
  setBmi: (bmi: number | undefined) => void;
}

export function TypeForm({
  className,
  isMetric,
  setIsMetric,
  setBmi,
}: TypeFormProps) {
  const handleRadioChange = () => {
    setIsMetric(!isMetric);
    setBmi(undefined);
  };

  return (
    <form className={clsx(className, "grid grid-cols-2 gap-24")}>
      <Radio checked={isMetric} label="Metric" onChange={handleRadioChange} />
      <Radio
        checked={!isMetric}
        label="Imperial"
        onChange={handleRadioChange}
      />
    </form>
  );
}

export default TypeForm;
