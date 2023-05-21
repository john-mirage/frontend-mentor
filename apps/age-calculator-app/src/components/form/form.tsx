import Input from "../input";
import Separator from "../separator";
import Button from "../button";
import { clsx } from "clsx";
import { useFormik } from "formik";
import Error from "../error";
import { isValid, isFuture } from "date-fns";

export interface FormValues {
  day?: string;
  month?: string;
  year?: string;
}

export interface FormProps {
  className?: string;
  handleForm: (values: FormValues) => void;
}

const validate = (values: FormValues) => {
  const errors: FormValues = {};

  if (!values.day) {
    errors.day = "Required";
  } else if (values.day.length !== 2) {
    errors.day = "Must be 2 characters";
  } else if (!/^0[1-9]$|^[12]\d$|^3[01]$/.test(values.day)) {
    errors.day = "Must be a valid day";
  }

  if (!values.month) {
    errors.month = "Required";
  } else if (values.month.length !== 2) {
    errors.month = "Must be 2 characters";
  } else if (!/^0[1-9]$|^1[012]$/.test(values.month)) {
    errors.month = "Must be a valid month";
  }

  if (!values.year) {
    errors.year = "Required";
  } else if (!/^\d{4}$/.test(values.year)) {
    errors.year = "Must be 4 digits";
  } else if (!errors.day && !errors.month) {
    const date = new Date(`${values.year}-${values.month}-${values.day}`);
    if (!isValid(date)) {
      errors.day = "The date is not valid";
    } else if (isFuture(date)) {
      errors.day = "Must be in the past";
    }
  }

  return errors;
};

export function Form(props: FormProps) {
  const formik = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validate,
    onSubmit: (values) => {
      props.handleForm(values);
    },
  });

  return (
    <form className={clsx(props.className)} onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-3 gap-16">
        <div>
          <Input
            label="day"
            placeholder="24"
            formikProps={formik.getFieldProps("day")}
          />
          {formik.touched.day && formik.errors.day ? (
            <Error>{formik.errors.day}</Error>
          ) : null}
        </div>
        <div>
          <Input
            label="month"
            placeholder="09"
            formikProps={formik.getFieldProps("month")}
          />
          {formik.touched.month && formik.errors.month ? (
            <Error>{formik.errors.month}</Error>
          ) : null}
        </div>
        <div>
          <Input
            label="year"
            placeholder="1984"
            formikProps={formik.getFieldProps("year")}
          />
          {formik.touched.year && formik.errors.year ? (
            <Error>{formik.errors.year}</Error>
          ) : null}
        </div>
      </div>
      <Separator className="mt-32">
        <Button />
      </Separator>
    </form>
  );
}

export default Form;
