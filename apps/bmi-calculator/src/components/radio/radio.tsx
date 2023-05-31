/* eslint-disable-next-line */
export interface RadioProps {
  className?: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function Radio({ className, label, checked, onChange }: RadioProps) {
  return (
    <label className="relative flex flex-row items-center gap-16">
      <input
        className="absolute top-0 left-0 w-full h-full opacity-0 peer"
        name="measure-type"
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <span className="flex justify-center items-center rounded-full w-32 h-32 shadow-radio transition-radio peer-checked:shadow-none peer-checked:bg-blue/20 before:block before:w-16 before:h-16 before:rounded-full before:scale-0 before:bg-blue before:transition-transform peer-checked:before:scale-100"></span>
      <span className="block text-body-m-bold text-gun-metal">{label}</span>
    </label>
  );
}

export default Radio;
