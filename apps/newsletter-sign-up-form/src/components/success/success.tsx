import * as Styled from "./success.style";

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
    <Styled.Container>
      <Styled.Icon />
      <Styled.Title>Thanks for subscribing!</Styled.Title>
      <Styled.Subtitle>
        A confirmation email has been sent to{" "}
        <Styled.Email>{props.email}</Styled.Email>. Please open it and click the
        button inside to confirm your subscription
      </Styled.Subtitle>
      <Styled.Button onClick={handleButtonClick}>Dismiss message</Styled.Button>
    </Styled.Container>
  );
}

export default Success;
