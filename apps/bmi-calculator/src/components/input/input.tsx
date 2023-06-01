import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

/* eslint-disable-next-line */
export interface InputProps {
  className?: string;
  label: string;
  labelIsVisible: boolean;
  unit: string;
  inputProps: UseFormRegisterReturn;
}

export function Input({
  className,
  label,
  labelIsVisible,
  unit,
  inputProps,
}: InputProps) {
  return (
    <div className={className}>
      <label
        className={clsx(
          labelIsVisible
            ? "mb-8 block text-body-s text-dark-electric-blue"
            : "sr-only"
        )}
      >
        {label}
        <span className="sr-only">in {unit}</span>
      </label>
      <div className="relative">
        <div className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
          {unit}
        </div>
        <input
          className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
          type="text"
          placeholder="0"
          {...inputProps}
        />
      </div>
    </div>
  );
}

export default Input;
