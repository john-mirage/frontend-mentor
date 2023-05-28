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
      <Period
        value={typeof years === "number" ? String(years) : "--"}
        label={years === 1 ? "year" : "years"}
      />
      <Period
        value={typeof months === "number" ? String(months) : "--"}
        label={months === 1 ? "month" : "months"}
      />
      <Period
        value={typeof days === "number" ? String(days) : "--"}
        label={days === 1 ? "day" : "days"}
      />
    </div>
  );
}

export default Result;
