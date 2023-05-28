import Period from "../period";

/* eslint-disable-next-line */
export interface ResultProps {
  years?: number;
  months?: number;
  days?: number;
}

export function Result({ years, months, days }: ResultProps) {
  return (
    <div>
      <Period value={years ? String(years) : "--"} label="years" />
      <Period value={months ? String(months) : "--"} label="months" />
      <Period value={days ? String(days) : "--"} label="days" />
    </div>
  );
}

export default Result;
