import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

/* eslint-disable-next-line */
export interface InputProps {
  hasError: boolean;
  inputProps: UseFormRegisterReturn;
  placeholder: string;
  label: string;
}

export function Input({ hasError, inputProps, placeholder }: InputProps) {
  return (
    <label>
      <span
        className={clsx(
          hasError ? "text-light-red" : "text-smokey-grey",
          "mb-4 block text-label-md uppercase @2xl:mb-8"
        )}
      >
        day
      </span>
      <input
        className={clsx(
          hasError
            ? "border-light-red focus-visible:outline-light-red"
            : "border-light-grey focus-visible:outline-purple",
          "w-full px-16 py-12 border-1 text-heading-sm text-off-black rounded-8 @2xl:px-24 @2xl:text-heading-md"
        )}
        type="text"
        placeholder={placeholder}
        {...inputProps}
      />
    </label>
  );
}

export default Input;
