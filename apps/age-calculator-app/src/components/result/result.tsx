import Period from "../period";

/* eslint-disable-next-line */
export interface ResultProps {
  years: number;
  months: number;
  days: number;
}

export function Result(props: ResultProps) {
  return (
    <div>
      <Period name="Years" value={props.years} />
      <Period name="Months" value={props.months} />
      <Period name="Days" value={props.days} />
    </div>
  );
}

export default Result;
