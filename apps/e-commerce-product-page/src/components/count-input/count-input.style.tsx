import styled, { css } from "styled-components";
import BaseIconButton from "../icon-button";
import { IconMinus, IconPlus } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.neutral.lightGrayishBlue};
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

export const Count = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const IconButton = styled(BaseIconButton)`
  transition-property: opacity background-color;
  transition-duration: 300ms;

  &:hover {
    opacity: 0.6;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = css`
  width: 1.2rem;
  height: auto;
  fill: ${(props) => props.theme.color.primary.orange};
`;

export const MinusIcon = styled(IconMinus)`
  ${Icon}
`;
export const PlusIcon = styled(IconPlus)`
  ${Icon}
`;
