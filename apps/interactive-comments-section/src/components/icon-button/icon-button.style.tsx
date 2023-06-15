import { headingMediumMixin } from "../../styles/fonts";
import styled, { css } from "styled-components";

interface ButtonProps {
  $color: string;
}

export const Button = styled.button<ButtonProps>`
  ${headingMediumMixin}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.pxToRem(8)};
  ${({ $color }) =>
    $color === "blue" &&
    css`
      color: ${({ theme }) => theme.color.moderateBlue};
    `}
  ${({ $color }) =>
    $color === "red" &&
    css`
      color: ${({ theme }) => theme.color.softRed};
    `}

  @media screen and (hover: hover) {
    &:hover {
      ${({ $color }) =>
        $color === "blue" &&
        css`
          color: ${({ theme }) => theme.color.lightGrayishBlue};
        `}
      ${({ $color }) =>
        $color === "red" &&
        css`
          color: ${({ theme }) => theme.color.paleRed};
        `}
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: color;
    transition-duration: 150ms;
  }
`;
