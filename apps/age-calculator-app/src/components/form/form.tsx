import Input from "../input";
import Separator from "../separator";
import Button from "../button";
import { clsx } from "clsx";
import Error from "../error";
import { useForm } from "react-hook-form";
import { isFuture } from "date-fns";

export interface FormValues {
  day?: string;
  month?: string;
  year?: string;
}

export interface FormProps {
  className?: string;
  handleForm: (values: FormValues) => void;
  resetResult: () => void;
}

export function Form(props: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data: any) => {
    props.handleForm(data);
  };

  const onError = () => {
    props.resetResult();
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
    <form
      className={clsx(props.className)}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="grid grid-cols-3 gap-16">
        <div>
          <Input
            label="day"
            placeholder="24"
            reactHookForm={register("day", {
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
          {errors.day && <Error>{errors.day?.message}</Error>}
        </div>
        <div>
          <Input
            label="month"
            placeholder="09"
            reactHookForm={register("month", {
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
          {errors.month && <Error>{errors.month?.message}</Error>}
        </div>
        <div>
          <Input
            label="year"
            placeholder="1984"
            reactHookForm={register("year", {
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
                checkDate: (v) => checkDate(v) || "Must be in the past",
              },
            })}
          />
          {errors.year && <Error>{errors.year?.message}</Error>}
        </div>
      </div>
      <Separator className="mt-32">
        <Button />
      </Separator>
    </form>
  );
}

export default Form;
