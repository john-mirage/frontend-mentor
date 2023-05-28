import Button from "../button";
import * as Styled from "./form.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

/* eslint-disable-next-line */
export interface FormProps {
  setSuccess: (success: boolean) => void;
  setEmail: (email: string) => void;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("Oops, this is empty")
      .email("Oops, wrong format"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Form(props: FormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = ({ email }) => {
    props.setEmail(email);
    props.setSuccess(true);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Container>
        <Styled.Row>
          <Styled.Label>Email address</Styled.Label>
          {errors.email && <Styled.Error>{errors.email?.message}</Styled.Error>}
        </Styled.Row>
        <Styled.Input
          hasError={!!errors.email}
          placeholder="email@company.com"
          {...register("email")}
        />
      </Styled.Container>
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}

export default Form;
