import { css } from "styled-components";

export const cardMixin = css`
  padding: ${({ theme }) => theme.pxToRem(16)};
  border-radius: ${({ theme }) => theme.pxToRem(8)};
  background-color: ${({ theme }) => theme.color.white};
`;
