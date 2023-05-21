import { FieldInputProps } from "formik";

/* eslint-disable-next-line */
export interface InputProps {
  label: string;
  placeholder: string;
  formikProps: FieldInputProps<any>;
}

export function Input(props: InputProps) {
  return (
    <label>
      <span className="mb-4 block text-label-md text-smokey-grey uppercase">
        {props.label}
      </span>
      <input
        className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
        type="text"
        placeholder={props.placeholder}
        {...props.formikProps}
      />
    </label>
  );
}

export default Input;
