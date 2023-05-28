import * as Styled from "./card.style";
import mobileIllustration from "../../images/illustration-sign-up-mobile.svg";
import desktopIllustration from "../../images/illustration-sign-up-desktop.svg";
import Form from "../form";
import Success from "../success";
import { useState } from "react";

/* eslint-disable-next-line */
export interface CardProps {
  className?: string;
}

export function Card({ className }: CardProps) {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <Styled.Card isSuccess={success} className={className}>
      {success ? (
        <Success email="email@company.com" setSuccess={setSuccess} />
      ) : (
        <>
          <Styled.Picture>
            <source srcSet={desktopIllustration} media="(min-width: 992px)" />
            <Styled.Image src={mobileIllustration} alt="" />
          </Styled.Picture>
          <Styled.Body>
            <Styled.Title>Stay updated!</Styled.Title>
            <Styled.Subtitle>
              Join 60,000+ product managers receiving monthly updates on:
            </Styled.Subtitle>
            <Styled.List />
            <Form setSuccess={setSuccess} />
          </Styled.Body>
        </>
      )}
    </Styled.Card>
  );
}

export default Card;
