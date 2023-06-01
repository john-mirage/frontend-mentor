import clsx from "clsx";
import Input from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

/* eslint-disable-next-line */
export interface MetricFormProps {
  className?: string;
  setBmi: (bmi: number | undefined) => void;
}

const schema = yup
  .object({
    centimeter: yup
      .string()
      .required("Must not be empty")
      .min(1, "Must be 1 digit min")
      .max(3, "Must be 3 digits max")
      .matches(/^[1-9]\d*$/, "Must be positive"),
    kilogram: yup
      .string()
      .required("Must not be empty")
      .min(1, "Must be 1 digit min")
      .max(3, "Must be 3 digits max")
      .matches(/^[1-9]\d*$/, "Must be positive"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function MetricForm({ className, setBmi }: MetricFormProps) {
  const {
    register,
    watch,
    formState: { errors, isValid, isValidating },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watchFields = watch();

  useEffect(() => {
    if (!isValidating && isValid) {
      const meters = Number(watchFields.centimeter) / 100;
      const squaredMeters = meters * meters;
      const bmi = Math.round(Number(watchFields.kilogram) / squaredMeters);
      setBmi(bmi);
    }
  }, [watchFields, isValid, isValidating, setBmi]);

  return (
    <form
      className={clsx(className, "grid grid-cols-2 gap-16 items-end lg:gap-24")}
    >
      <div>
        <Input
          label="Height"
          labelIsVisible={true}
          unit="cm"
          inputProps={register("centimeter")}
        />
        <p>{errors.centimeter?.message}</p>
      </div>
      <div>
        <Input
          label="Weight"
          labelIsVisible={true}
          unit="kg"
          inputProps={register("kilogram")}
        />
        <p>{errors.kilogram?.message}</p>
      </div>
    </form>
  );
}

export default MetricForm;
