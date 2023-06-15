import { headingMediumMixin } from "../../styles/fonts";
import styled, { css } from "styled-components";

interface ButtonProps {
  $variant: string;
  $fullWidth: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${headingMediumMixin}
  ${({ $fullWidth }) =>
    $fullWidth
      ? css`
          width: 100%;
        `
      : css`
          min-width: ${({ theme }) => theme.pxToRem(104)};
        `}
  ${({ $variant }) =>
    $variant === "blue" &&
    css`
      background-color: ${({ theme }) => theme.color.moderateBlue};
    `}
  ${({ $variant }) =>
    $variant === "red" &&
    css`
      background-color: ${({ theme }) => theme.color.softRed};
    `}
  border-radius: ${({ theme }) => theme.pxToRem(8)};
  padding: ${({ theme }) => `${theme.pxToRem(12)} ${theme.pxToRem(16)}`};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;

  @media screen and (hover: hover) {
    &:hover {
      ${({ $variant }) =>
        $variant === "blue" &&
        css`
          background-color: ${({ theme }) => theme.color.lightGrayishBlue};
        `}
      ${({ $variant }) =>
        $variant === "red" &&
        css`
          background-color: ${({ theme }) => theme.color.paleRed};
        `}
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: background-color;
    transition-duration: 150ms;
  }
`;
