import styled from "styled-components";
import { IconSuccess } from "../icons";
import BaseButton from "../button";
import {
  mediumHeadingText,
  bodyText,
  largeHeadingText,
} from "../../styles/styled-components.mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${(props) =>
    `${props.theme.pxToRem(148)} ${props.theme.pxToRem(
      24
    )} ${props.theme.pxToRem(40)} ${props.theme.pxToRem(24)}`};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    min-height: auto;
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

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
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
