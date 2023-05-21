/* eslint-disable-next-line */
export interface PeriodProps {
  name: string;
  value: number;
}

export function Period(props: PeriodProps) {
  return (
    <p className="text-display-md italic text-off-black">
      <span className="text-purple">{props.value ? props.value : "--"}</span>{" "}
      {props.name}
    </p>
  );
}

export default Period;
