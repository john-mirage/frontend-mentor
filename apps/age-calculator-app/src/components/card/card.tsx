import { useState, useEffect } from "react";
import { intervalToDuration, isFuture } from "date-fns";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../button";
import Result from "../result";
import Error from "../error";
import Input from "../input";

const schema = yup
  .object({
    year: yup
      .string()
      .required("Must not be empty")
      .length(4, "Must be 4 characters")
      .matches(/^\d{4}$/, "Must be a valid year")
      .test("date-in-the-past", "Must be in the past", (year, { parent }) => {
        if (year && parent.month && parent.day) {
          const date = new Date(`${year}-${parent.month}-${parent.day}`);
          return !isFuture(date);
        } else if (year) {
          const date = new Date(`${year}-01-01`);
          return !isFuture(date);
        } else {
          return true;
        }
      }),
    month: yup
      .string()
      .required("Must not be empty")
      .length(2, "Must be 2 characters")
      .matches(/^0[1-9]$|^1[012]$/, "Must be a valid month"),
    day: yup
      .string()
      .required("Must not be empty")
      .length(2, "Must be 2 characters")
      .matches(/^0[1-9]$|^[12]\d$|^3[01]$/, "Must be a valid day"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Card() {
  const [years, setYears] = useState<number | undefined>(undefined);
  const [months, setMonths] = useState<number | undefined>(undefined);
  const [days, setDays] = useState<number | undefined>(undefined);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    getValues,
  } = useForm<FormData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = ({ year, month, day }) => {
    const date = new Date(`${year}-${month}-${day}`);
    const interval = intervalToDuration({
      start: date,
      end: Date.now(),
    });
    if (interval.years !== years) setYears(interval.years);
    if (interval.months !== months) setMonths(interval.months);
    if (interval.days !== days) setDays(interval.days);
  };

  const onError = () => {
    setYears(undefined);
    setMonths(undefined);
    setDays(undefined);
  };

  useEffect(() => {
    reset({
      year: getValues("year"),
      month: getValues("month"),
      day: getValues("day"),
    });
  }, [isSubmitSuccessful, reset, getValues]);

  return (
    <article className="@container w-full max-w-840">
      <div className="px-24 py-48 bg-white rounded-tl-24 rounded-tr-24 rounded-bl-24 rounded-br-100 @2xl:rounded-br-200 @2xl:p-56">
        <form
          className="mb-32 @2xl:mb-0"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="grid gap-16 @sm:grid-cols-form @2xl:gap-32">
            <div>
              <Input
                label="day"
                hasError={!!errors.day}
                inputProps={register("day")}
                placeholder="DD"
              />
              {errors.day && <Error>{errors.day?.message}</Error>}
            </div>
            <div>
              <Input
                label="month"
                hasError={!!errors.month}
                inputProps={register("month")}
                placeholder="MM"
              />
              {errors.month && <Error>{errors.month?.message}</Error>}
            </div>
            <div>
              <Input
                label="year"
                hasError={!!errors.year}
                inputProps={register("year")}
                placeholder="YYYY"
              />
              {errors.year && <Error>{errors.year?.message}</Error>}
            </div>
          </div>
          <div className="mt-32 relative flex flex-row justify-center @3xl:mt-0 @3xl:justify-end">
            <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-light-grey"></div>
            <Button />
          </div>
        </form>
        <Result years={years} months={months} days={days} />
      </div>
    </article>
  );
}

export default Card;
