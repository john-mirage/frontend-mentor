import clsx from "clsx";
import Input from "../input";

/* eslint-disable-next-line */
export interface MetricFormProps {
  className?: string;
  setBmi: (bmi: number) => void;
}

export function MetricForm(props: MetricFormProps) {
  return (
    <form
      className={clsx(
        props.className,
        "grid grid-cols-2 gap-16 items-end lg:gap-24"
      )}
    >
      <Input label="Height" labelIsVisible={true} unit="cm" />
      <Input label="Weight" labelIsVisible={true} unit="kg" />
    </form>
  );
}

export default MetricForm;
