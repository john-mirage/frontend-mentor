import { headingMediumMixin } from "../../styles/fonts";
import styled, { css } from "styled-components";

interface ButtonProps {
  $isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ theme }) => theme.pxToRem(100)};
  height: ${({ theme }) => theme.pxToRem(40)};
  background-color: ${({ theme }) => theme.color.veryLightGray};
  border-radius: ${({ theme }) => theme.pxToRem(10)};
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ $isActive }) =>
    $isActive
      ? css`
          color: ${({ theme }) => theme.color.moderateBlue};
        `
      : css`
          color: ${({ theme }) => theme.color.lightGrayishBlue};
        `}

  @media screen and (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.color.moderateBlue};
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: color;
    transition-duration: 150ms;
  }
`;

export const Count = styled.p`
  ${headingMediumMixin}
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.color.moderateBlue};
`;
