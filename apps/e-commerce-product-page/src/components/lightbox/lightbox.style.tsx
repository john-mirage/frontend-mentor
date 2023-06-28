import styled from "styled-components";
import IconButton from "../icon-button";
import { IconClose } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: ${({ theme }) => theme.pxToRem(120)};
  padding-bottom: ${({ theme }) => theme.pxToRem(50)};
`;

export const Dialog = styled.div`
  position: relative;
  width: ${({ theme }) => theme.pxToRem(700)};
  height: auto;
  margin: auto;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme }) => theme.pxToRem(-10)};
  right: 0;
  transform: translateY(-100%);
  width: ${({ theme }) => theme.pxToRem(60)};
  height: ${({ theme }) => theme.pxToRem(60)};
  margin-right: ${({ theme }) => theme.pxToRem(-20)};
`;

export const CloseIcon = styled(IconClose)`
  width: ${({ theme }) => theme.pxToRem(20)};
  height: auto;
  fill: ${(props) => props.theme.color.neutral.white};
  transition: fill 300ms;

  ${CloseButton}:hover & {
    fill: ${(props) => props.theme.color.primary.orange};
  }
`;
