import { useState } from "react";
import Form from "../form";
import Result from "../result";
import { intervalToDuration } from "date-fns";

export interface FormValues {
  day?: string;
  month?: string;
  year?: string;
}

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  const [days, setDays] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [years, setYears] = useState<number>(0);

  const handleForm = (values: FormValues) => {
    const date = new Date(`${values.year}-${values.month}-${values.day}`);
    const interval = intervalToDuration({
      start: date,
      end: Date.now(),
    });
    setYears(interval.years ?? 0);
    setMonths(interval.months ?? 0);
    setDays(interval.days ?? 0);
  };

  const resetResult = () => {
    setYears(0);
    setMonths(0);
    setDays(0);
  };

  return (
    <article className="@container w-full max-w-840">
      <div className="px-24 py-48 bg-white rounded-tl-24 rounded-tr-24 rounded-bl-24 rounded-br-100 @card:rounded-br-200">
        <Form
          className="mb-32"
          handleForm={handleForm}
          resetResult={resetResult}
        />
        <Result years={years} months={months} days={days} />
      </div>
    </article>
  );
}

export default Card;
