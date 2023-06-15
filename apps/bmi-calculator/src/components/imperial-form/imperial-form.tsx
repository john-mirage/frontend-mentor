import clsx from "clsx";
import Input from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

export interface ImperialFormProps {
  className?: string;
  setFeets: (feets: string) => void;
  setInches: (inches: string) => void;
  setStones: (stones: string) => void;
  setPounds: (pounds: string) => void;
}

const unitSchema = yup
  .string()
  .max(3, "Must be 3 digits max")
  .matches(/^\d*$/, "Must be a number");

const schema = yup
  .object({
    feets: unitSchema,
    inches: unitSchema,
    stones: unitSchema,
    pounds: unitSchema,
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function ImperialForm({
  className,
  setFeets,
  setInches,
  setStones,
  setPounds,
}: ImperialFormProps) {
  const {
    register,
    watch,
    formState: { isValid, errors, isValidating },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watchFields = watch();

  useEffect(() => {
    if (!isValidating && isValid) {
      if (
        (watchFields.feets || watchFields.inches) &&
        (watchFields.stones || watchFields.pounds)
      ) {
        setFeets(watchFields.feets || "");
        setInches(watchFields.inches || "");
        setStones(watchFields.stones || "");
        setPounds(watchFields.pounds || "");
      }
    }
  }, [
    watchFields,
    isValid,
    isValidating,
    setFeets,
    setInches,
    setStones,
    setPounds,
  ]);

  return (
    <form
      className={clsx(
        className,
        "grid sm:grid-cols-2 gap-16 items-end lg:gap-y-16 lg:gap-x-24"
      )}
    >
      <div className="relative">
        <Input
          label="Height"
          labelIsVisible={true}
          unit="ft"
          inputProps={register("feets")}
        />
        <p className="absolute text-body-s-bold text-red">
          {errors.feets?.message}
        </p>
      </div>
      <div className="relative">
        <Input
          label="Height"
          labelIsVisible={false}
          unit="in"
          inputProps={register("inches")}
        />
        <p className="absolute text-body-s-bold text-red">
          {errors.inches?.message}
        </p>
      </div>
      <div className="relative">
        <Input
          label="Weight"
          labelIsVisible={true}
          unit="st"
          inputProps={register("stones")}
        />
        <p className="absolute text-body-s-bold text-red">
          {errors.stones?.message}
        </p>
      </div>
      <div className="relative">
        <Input
          label="Weight"
          labelIsVisible={false}
          unit="lbs"
          inputProps={register("pounds")}
        />
        <p className="absolute text-body-s-bold text-red">
          {errors.pounds?.message}
        </p>
      </div>
    </form>
  );
}

export default ImperialForm;
