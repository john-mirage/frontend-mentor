import Radio from "../radio";
import clsx from "clsx";

/* eslint-disable-next-line */
export interface TypeFormProps {
  className?: string;
  isMetric: boolean;
  setIsMetric: (isMetric: boolean) => void;
}

export function TypeForm({ className, isMetric, setIsMetric }: TypeFormProps) {
  const handleRadioChange = () => {
    setIsMetric(!isMetric);
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
