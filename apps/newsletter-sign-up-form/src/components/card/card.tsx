import * as Styled from "./card.style";
import mobileIllustration from "../../images/illustration-sign-up-mobile.svg";
import desktopIllustration from "../../images/illustration-sign-up-desktop.svg";
import Form from "../form";
import Success from "../success";
import { useState } from "react";

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <Styled.Card>
      {success ? (
        <Success email="email@company.com" setSuccess={setSuccess} />
      ) : (
        <>
          <picture>
            <source srcSet={desktopIllustration} media="(min-width: 576px)" />
            <img src={mobileIllustration} alt="" />
          </picture>
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
