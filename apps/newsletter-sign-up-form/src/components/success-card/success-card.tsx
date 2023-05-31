import * as Styled from "./success-card.style";

/* eslint-disable-next-line */
export interface SuccessProps {
  email: string;
  setSuccess: (success: boolean) => void;
}

export function SuccessCard(props: SuccessProps) {
  const handleButtonClick = () => {
    props.setSuccess(false);
  };

  return (
    <Styled.Card
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
    >
      <Styled.Icon />
      <Styled.Title>Thanks for subscribing!</Styled.Title>
      <Styled.Subtitle>
        A confirmation email has been sent to{" "}
        <Styled.Email>{props.email}</Styled.Email>. Please open it and click the
        button inside to confirm your subscription
      </Styled.Subtitle>
      <Styled.Button onClick={handleButtonClick}>Dismiss message</Styled.Button>
    </Styled.Card>
  );
}

export default SuccessCard;
