import { useState, useEffect } from "react";
import { intervalToDuration, isFuture } from "date-fns";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { clsx } from "clsx";

const schema = yup
  .object({
    year: yup
      .string()
      .required("Must not be empty")
      .length(4, "Must be 4 characters")
      .matches(/^\d{4}$/, "Must be a valid year")
      .test("is-in-the-past", "Must be in the past", (value, { parent }) => {
        const date = new Date(`${value}-${parent.month}-${parent.day}`);
        return !isFuture(date);
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
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = ({ year, month, day }) => {
    const date = new Date(`${year}-${month}-${day}`);
    const interval = intervalToDuration({
      start: date,
      end: Date.now(),
    });
    setYears(interval.years);
    setMonths(interval.months);
    setDays(interval.days);
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
              <label>
                <span
                  className={clsx(
                    errors.day ? "text-light-red" : "text-smokey-grey",
                    "mb-4 block text-label-md uppercase @2xl:mb-8"
                  )}
                >
                  day
                </span>
                <input
                  className={clsx(
                    errors.day
                      ? "border-light-red focus-visible:outline-light-red"
                      : "border-light-grey focus-visible:outline-purple",
                    "w-full px-16 py-12 border-1 text-heading-sm text-off-black rounded-8 @2xl:px-24 @2xl:text-heading-md"
                  )}
                  type="text"
                  placeholder="DD"
                  {...register("day")}
                />
              </label>
              {errors.day && (
                <p className="mt-4 text-body-md text-light-red italic @2xl:mt-8 @2xl:text-body-lg">
                  {errors.day?.message}
                </p>
              )}
            </div>
            <div>
              <label>
                <span
                  className={clsx(
                    errors.month ? "text-light-red" : "text-smokey-grey",
                    "mb-4 block text-label-md uppercase @2xl:mb-8"
                  )}
                >
                  month
                </span>
                <input
                  className={clsx(
                    errors.month
                      ? "border-light-red focus-visible:outline-light-red"
                      : "border-light-grey focus-visible:outline-purple",
                    "w-full px-16 py-12 border-1 text-heading-sm text-off-black rounded-8 @2xl:px-24 @2xl:text-heading-md"
                  )}
                  type="text"
                  placeholder="MM"
                  {...register("month")}
                />
              </label>
              {errors.month && (
                <p className="mt-4 text-body-md text-light-red italic @2xl:mt-8 @2xl:text-body-lg">
                  {errors.month?.message}
                </p>
              )}
            </div>
            <div>
              <label>
                <span
                  className={clsx(
                    errors.year ? "text-light-red" : "text-smokey-grey",
                    "mb-4 block text-label-md uppercase @2xl:mb-8"
                  )}
                >
                  year
                </span>
                <input
                  className={clsx(
                    errors.year
                      ? "border-light-red focus-visible:outline-light-red"
                      : "border-light-grey focus-visible:outline-purple",
                    "w-full px-16 py-12 border-1 text-heading-sm text-off-black rounded-8 @2xl:px-24 @2xl:text-heading-md"
                  )}
                  type="text"
                  placeholder="YYYY"
                  {...register("year")}
                />
              </label>
              {errors.year && (
                <p className="mt-4 text-body-md text-light-red italic @2xl:mt-8 @2xl:text-body-lg">
                  {errors.year?.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-32 relative flex flex-row justify-center @3xl:mt-0 @3xl:justify-end">
            <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-light-grey"></div>
            <button
              type="submit"
              className="relative z-20 flex justify-center items-center w-64 h-64 rounded-full bg-purple transition-colors focus-visible:outline-offset-8 focus-visible:outline-purple hover-device:hover:bg-off-black @2xl:w-96 @2xl:h-96"
            >
              <svg
                className="w-24 h-24 @2xl:w-44 @2xl:h-44"
                xmlns="http://www.w3.org/2000/svg"
                width={46}
                height={44}
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" strokeWidth={2}>
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
          </div>
        </form>
        <div>
          <p className="min-w-full truncate text-display-sm italic text-off-black @sm:text-display-md @2xl:text-display-lg">
            <span className="text-purple">{years ?? "--"}</span> years
          </p>
          <p className="min-w-full truncate text-display-sm italic text-off-black @sm:text-display-md @2xl:text-display-lg">
            <span className="text-purple">{months ?? "--"}</span> months
          </p>
          <p className="min-w-full truncate text-display-sm italic text-off-black @sm:text-display-md @2xl:text-display-lg">
            <span className="text-purple">{days ?? "--"}</span> days
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
