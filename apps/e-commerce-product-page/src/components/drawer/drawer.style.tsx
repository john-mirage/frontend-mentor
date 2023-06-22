import styled from "styled-components";
import BaseNavigation from "../navigation";
import BaseIconButton from "../icon-button";
import { IconClose } from "../icons";

export const Container = styled.aside`
  width: ${({ theme }) => theme.pxToRem(200)};
  height: 100%;
  background-color: ${(props) => props.theme.color.neutral.white};
`;

export const CloseButton = styled(BaseIconButton)`
  margin-bottom: ${({ theme }) => theme.pxToRem(10)};
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CloseIcon = styled(IconClose)`
  width: ${({ theme }) => theme.pxToRem(12)};
  height: auto;
  fill: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;

export const Navigation = styled(BaseNavigation)`
  padding-left: ${({ theme }) => theme.pxToRem(18)};
`;
