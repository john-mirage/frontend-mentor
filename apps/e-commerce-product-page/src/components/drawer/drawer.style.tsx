import styled from "styled-components";
import BaseNavigation from "../navigation";
import BaseIconButton from "../icon-button";
import { IconClose } from "../icons";

export const Container = styled.aside`
  width: 20rem;
  height: 100%;
  background-color: ${(props) => props.theme.color.neutral.white};
`;

export const CloseButton = styled(BaseIconButton)`
  margin-bottom: 1rem;
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CloseIcon = styled(IconClose)`
  width: 1.2rem;
  height: auto;
  fill: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;

export const Navigation = styled(BaseNavigation)`
  padding-left: 1.8rem;
`;
