import * as Styled from "./form-card.style";
import mobileIllustration from "../../images/illustration-sign-up-mobile.svg";
import desktopIllustration from "../../images/illustration-sign-up-desktop.svg";
import Form from "../form";

/* eslint-disable-next-line */
export interface CardProps {
  className?: string;
  setSuccess: (success: boolean) => void;
  setEmail: (email: string) => void;
}

export function FormCard({ className, setSuccess, setEmail }: CardProps) {
  return (
    <Styled.Card
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
    >
      <Styled.Picture>
        <source srcSet={desktopIllustration} media="(min-width: 992px)" />
        <Styled.Image src={mobileIllustration} alt="" draggable="false" />
      </Styled.Picture>
      <Styled.Body>
        <Styled.Title>Stay updated!</Styled.Title>
        <Styled.Subtitle>
          Join 60,000+ product managers receiving monthly updates on:
        </Styled.Subtitle>
        <Styled.List />
        <Form setEmail={setEmail} setSuccess={setSuccess} />
      </Styled.Body>
    </Styled.Card>
  );
}

export default FormCard;
