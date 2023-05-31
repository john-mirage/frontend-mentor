import styled, { css } from "styled-components";
import { boldBodyText } from "../../styles/styled-components.mixins";

const hoverEffect = css`
  background: linear-gradient(
    to bottom left,
    ${({ theme }) => theme.color.buttonFrom},
    ${({ theme }) => theme.color.buttonTo}
  );
  box-shadow: 0 ${({ theme }) => theme.pxToRem(16)}
    ${({ theme }) => theme.pxToRem(32)} 0
    ${({ theme }) => theme.color.buttonShadow};
`;

export const Button = styled.button`
  ${boldBodyText}
  display: block;
  width: 100%;
  padding: ${(props) =>
    `${props.theme.pxToRem(16)} ${props.theme.pxToRem(24)}`};
  background-color: ${(props) => props.theme.color.darkSlateGrey};
  border-radius: ${(props) => props.theme.pxToRem(8)};
  color: ${(props) => props.theme.color.white};

  &:focus-visible {
    ${hoverEffect}
    outline: none;
  }

  @media screen and (hover: hover) {
    &:hover {
      ${hoverEffect}
    }
  }
`;
