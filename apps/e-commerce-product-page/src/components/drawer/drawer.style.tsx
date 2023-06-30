import styled from "styled-components";
import BaseIconButton from "../icon-button";
import { IconClose } from "../icons";

export const Container = styled.aside`
  width: ${({ theme }) => theme.pxToRem(250)};
  height: 100%;
  background-color: ${(props) => props.theme.color.neutral.white};
  padding: ${({ theme }) => theme.pxToRem(24)};
`;

export const CloseButton = styled(BaseIconButton)`
  margin-top: ${({ theme }) => theme.pxToRem(-17)};
  margin-left: ${({ theme }) => theme.pxToRem(-17)};
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: background-color;
    transition-duration: 150ms;
  }

  @media screen and (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.color.neutral.lightGrayishBlue};
    }
  }
`;

export const CloseIcon = styled(IconClose)`
  width: ${({ theme }) => theme.pxToRem(13)};
  height: auto;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;
