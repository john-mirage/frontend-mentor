import { useState } from "react";
import { intervalToDuration, isFuture } from "date-fns";
import { useForm, SubmitHandler } from "react-hook-form";

export interface FormValues {
  year?: string;
  month?: string;
  day?: string;
}

export function Card() {
  const [years, setYears] = useState<number | undefined>(undefined);
  const [months, setMonths] = useState<number | undefined>(undefined);
  const [days, setDays] = useState<number | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const date = new Date(`${values.year}-${values.month}-${values.day}`);
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

  const checkDate = (year: string) => {
    const day = getValues("day");
    const month = getValues("month");
    if (day && month) {
      const date = new Date(`${year}-${month}-${day}`);
      if (isFuture(date)) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  return (
    <article className="@container w-full max-w-840">
      <div className="px-24 py-48 bg-white rounded-tl-24 rounded-tr-24 rounded-bl-24 rounded-br-100 @card:rounded-br-200">
        <form className="mb-32" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="grid grid-cols-3 gap-16">
            <div>
              <label>
                <span className="mb-4 block text-label-md text-smokey-grey uppercase">
                  day
                </span>
                <input
                  className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
                  type="text"
                  placeholder="24"
                  {...register("day", {
                    required: "Must enter the day",
                    minLength: {
                      value: 2,
                      message: "Must be 2 characters",
                    },
                    maxLength: {
                      value: 2,
                      message: "Must be 2 characters",
                    },
                    pattern: {
                      value: /^0[1-9]$|^[12]\d$|^3[01]$/,
                      message: "Must be a valid day",
                    },
                  })}
                />
              </label>
              {errors.day && (
                <p className="mt-4 text-body-sm text-light-red italic">
                  {errors.day.message}
                </p>
              )}
            </div>
            <div>
              <label>
                <span className="mb-4 block text-label-md text-smokey-grey uppercase">
                  month
                </span>
                <input
                  className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
                  type="text"
                  placeholder="09"
                  {...register("month", {
                    required: "Must enter the month",
                    minLength: {
                      value: 2,
                      message: "Must be 2 characters",
                    },
                    maxLength: {
                      value: 2,
                      message: "Must be 2 characters",
                    },
                    pattern: {
                      value: /^0[1-9]$|^1[012]$/,
                      message: "Must be a valid month",
                    },
                  })}
                />
              </label>
              {errors.month && (
                <p className="mt-4 text-body-sm text-light-red italic">
                  {errors.month.message}
                </p>
              )}
            </div>
            <div>
              <label>
                <span className="mb-4 block text-label-md text-smokey-grey uppercase">
                  year
                </span>
                <input
                  className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
                  type="text"
                  placeholder="1984"
                  {...register("year", {
                    required: "Must enter the year",
                    minLength: {
                      value: 4,
                      message: "Must be 4 characters",
                    },
                    maxLength: {
                      value: 4,
                      message: "Must be 4 characters",
                    },
                    pattern: {
                      value: /^\d{4}$/,
                      message: "Must be 4 digits",
                    },
                    validate: {
                      checkDate: (v) =>
                        checkDate(v ?? "") || "Must be in the past",
                    },
                  })}
                />
              </label>
              {errors.year && (
                <p className="mt-4 text-body-sm text-light-red italic">
                  {errors.year.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-32 relative flex flex-row justify-center">
            <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-light-grey"></div>
            <div className="relative z-20">
              <button
                type="submit"
                className="flex justify-center items-center w-64 h-64 rounded-full bg-purple"
              >
                <svg
                  className="w-24 h-24"
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
          </div>
        </form>
        <div>
          <p className="text-display-md italic text-off-black">
            <span className="text-purple">{years ?? "--"}</span> years
          </p>
          <p className="text-display-md italic text-off-black">
            <span className="text-purple">{months ?? "--"}</span> months
          </p>
          <p className="text-display-md italic text-off-black">
            <span className="text-purple">{days ?? "--"}</span> days
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
