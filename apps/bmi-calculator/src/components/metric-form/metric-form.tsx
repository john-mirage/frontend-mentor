import clsx from "clsx";
import Input from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

export interface MetricFormProps {
  className?: string;
  setCentimeters: (centimeters: string) => void;
  setKilograms: (kilograms: string) => void;
}

const unitSchema = yup
  .string()
  .required("Must not be empty")
  .min(1, "Must be 1 digit min")
  .max(3, "Must be 3 digits max")
  .matches(/^[1-9]\d*$/, "Must be a number");

const schema = yup
  .object({
    centimeter: unitSchema,
    kilogram: unitSchema,
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function MetricForm({
  className,
  setCentimeters,
  setKilograms,
}: MetricFormProps) {
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
      setCentimeters(watchFields.centimeter);
      setKilograms(watchFields.kilogram);
    }
  }, [watchFields, isValid, isValidating, setCentimeters, setKilograms]);

  return (
    <form
      className={clsx(className, "grid grid-cols-2 gap-16 items-end lg:gap-24")}
    >
      <div className="relative">
        <Input
          label="Height"
          labelIsVisible={true}
          unit="cm"
          inputProps={register("centimeter")}
        />
        <p className="absolute text-body-s-bold text-red">
          {errors.centimeter?.message}
        </p>
      </div>
      <div className="relative">
        <Input
          label="Weight"
          labelIsVisible={true}
          unit="kg"
          inputProps={register("kilogram")}
        />
        <p className="absolute text-body-s-bold text-red">
          {errors.kilogram?.message}
        </p>
      </div>
    </form>
  );
}

export default MetricForm;
