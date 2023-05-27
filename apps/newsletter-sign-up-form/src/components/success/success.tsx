import * as Styled from "./success.style";
import Button from "../button";

/* eslint-disable-next-line */
export interface SuccessProps {
  email: string;
  setSuccess: (success: boolean) => void;
}

export function Success(props: SuccessProps) {
  const handleButtonClick = () => {
    props.setSuccess(false);
  };

  return (
    <>
      <Styled.Icon />
      <Styled.Title>Thanks for subscribing!</Styled.Title>
      <Styled.Subtitle>
        A confirmation email has been sent to{" "}
        <Styled.Email>{props.email}</Styled.Email>. Please open it and click the
        button inside to confirm your subscription
      </Styled.Subtitle>
      <Button onClick={handleButtonClick}>Dismiss message</Button>
    </>
  );
}

export default Success;
