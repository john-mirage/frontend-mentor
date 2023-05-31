import clsx from "clsx";
import Input from "../input";

/* eslint-disable-next-line */
export interface ImperialFormProps {
  className?: string;
  setBmi: (bmi: number) => void;
}

export function ImperialForm(props: ImperialFormProps) {
  return (
    <form
      className={clsx(
        props.className,
        "grid grid-cols-2 gap-16 items-end lg:gap-y-16 lg:gap-x-24"
      )}
    >
      <Input label="Height" labelIsVisible={true} unit="ft" />
      <Input label="Height" labelIsVisible={false} unit="in" />
      <Input label="Weight" labelIsVisible={true} unit="st" />
      <Input label="Weight" labelIsVisible={false} unit="lbs" />
    </form>
  );
}

export default ImperialForm;
