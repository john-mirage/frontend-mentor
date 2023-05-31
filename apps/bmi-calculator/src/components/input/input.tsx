import clsx from "clsx";

/* eslint-disable-next-line */
export interface InputProps {
  className?: string;
  label: string;
  labelIsVisible: boolean;
  unit: string;
}

export function Input({ className, label, labelIsVisible, unit }: InputProps) {
  const id = `${label} in ${unit}`;

  return (
    <div className={className}>
      <label
        className={clsx(
          labelIsVisible
            ? "mb-8 block text-body-s text-dark-electric-blue"
            : "sr-only"
        )}
        htmlFor={id}
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
          id={id}
        />
      </div>
    </div>
  );
}

export default Input;
