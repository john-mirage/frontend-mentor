import styled from "styled-components";
import { IconSuccess } from "../icons";
import BaseButton from "../button";
import {
  mediumHeadingText,
  bodyText,
  largeHeadingText,
  CardBase,
} from "../../styles/styled-components.mixins";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  ${CardBase}
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    `${props.theme.pxToRem(148)} ${props.theme.pxToRem(
      24
    )} ${props.theme.pxToRem(40)} ${props.theme.pxToRem(24)}`};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: ${({ theme }) => theme.pxToRem(528)};
    padding: ${({ theme }) => theme.pxToRem(64)};
  }
`;

export const Icon = styled(IconSuccess)`
  margin-bottom: ${({ theme }) => theme.pxToRem(40)};
  width: ${({ theme }) => theme.pxToRem(64)};
  height: ${({ theme }) => theme.pxToRem(64)};
`;

export const Title = styled.h2`
  ${mediumHeadingText}
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  color: ${({ theme }) => theme.color.darkSlateGrey};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    ${largeHeadingText}
  }
`;

export const Subtitle = styled.p`
  ${bodyText}
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  color: ${({ theme }) => theme.color.darkSlateGrey};
`;

export const Email = styled.span`
  font-weight: 700;
`;

export const Button = styled(BaseButton)`
  margin-top: auto;
`;
