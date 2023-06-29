import styled, { css } from "styled-components";
import BaseIconButton from "../icon-button";
import { IconMinus, IconPlus } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(60)};
  border-radius: ${({ theme }) => theme.pxToRem(10)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.neutral.lightGrayishBlue};
  padding-left: ${({ theme }) => theme.pxToRem(4)};
  padding-right: ${({ theme }) => theme.pxToRem(4)};
`;

export const Count = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const IconButton = styled(BaseIconButton)`
  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: opacity background-color;
    transition-duration: 150ms;
  }

  @media screen and (hover: hover) {
    &:hover {
      opacity: 0.6;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const Icon = css`
  width: ${({ theme }) => theme.pxToRem(12)};
  height: auto;
  color: ${(props) => props.theme.color.primary.orange};
`;

export const MinusIcon = styled(IconMinus)`
  ${Icon}
`;
export const PlusIcon = styled(IconPlus)`
  ${Icon}
`;
