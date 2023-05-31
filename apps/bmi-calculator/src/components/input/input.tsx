import clsx from "clsx";
import { useNumberFieldState } from "react-stately";
import { useLocale, useNumberField } from "react-aria";
import { useRef } from "react";

/* eslint-disable-next-line */
export interface InputProps {
  className?: string;
  label: string;
  labelIsVisible: boolean;
  unit: string;
  value: number;
  onChange: (value: number) => void;
  formatOptions?: Intl.NumberFormatOptions;
  minValue?: number;
}

export function Input(props: InputProps) {
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const inputRef = useRef(null);
  const { labelProps, inputProps } = useNumberField(props, state, inputRef);

  return (
    <div className={props.className}>
      <label
        className={clsx(
          props.labelIsVisible
            ? "mb-8 block text-body-s text-dark-electric-blue"
            : "sr-only"
        )}
        {...labelProps}
      >
        {props.label}
        <span className="sr-only">in {props.unit}</span>
      </label>
      <div className="relative">
        <div className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
          {props.unit}
        </div>
        <input
          ref={inputRef}
          {...inputProps}
          className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
}

export default Input;
