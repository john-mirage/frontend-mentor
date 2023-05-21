/* eslint-disable-next-line */
export interface InputProps {
  label: string;
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <label>
      <span className="mb-4 text-label-md text-smokey-grey uppercase">
        {props.label}
      </span>
      <input
        className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
        type="text"
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default Input;
