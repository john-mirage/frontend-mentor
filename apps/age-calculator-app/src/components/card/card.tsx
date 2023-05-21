import { useState } from "react";
import Form from "../form";
import Result from "../result";
import { intervalToDuration } from "date-fns";

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const handleForm = (values) => {
    const date = new Date(`${values.year}-${values.month}-${values.day}`);
    const interval = intervalToDuration({
      start: date,
      end: Date.now(),
    });
    console.log(interval);
    setYears(interval.years);
    setMonths(interval.months);
    setDays(interval.days);
  };

  return (
    <article className="@container w-full max-w-840">
      <div className="px-24 py-48 bg-white rounded-tl-24 rounded-tr-24 rounded-bl-24 rounded-br-100 @card:rounded-br-200">
        <Form className="mb-32" handleForm={handleForm} />
        <Result years={years} months={months} days={days} />
      </div>
    </article>
  );
}

export default Card;
