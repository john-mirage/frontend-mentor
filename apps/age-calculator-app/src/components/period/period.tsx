/* eslint-disable-next-line */
export interface PeriodProps {
  value: string;
  label: string;
}

export function Period({ value, label }: PeriodProps) {
  return (
    <p className="min-w-full truncate text-display-sm italic text-off-black @sm:text-display-md @2xl:text-display-lg">
      <span className="text-purple">{value}</span> {label}
    </p>
  );
}

export default Period;
