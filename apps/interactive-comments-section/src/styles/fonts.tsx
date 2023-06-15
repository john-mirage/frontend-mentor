import { css } from "styled-components";

const fontFamilyMixin = css`
  font-family: ${({ theme }) => theme.font.stack};
`;

export const headingMediumMixin = css`
  ${fontFamilyMixin}
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.pxToRem(24)};
`;

export const bodyMediumMixin = css`
  ${fontFamilyMixin}
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.pxToRem(24)};
`;

export const badgeMixin = css`
  ${fontFamilyMixin}
  font-size: ${({ theme }) => theme.pxToRem(13)};
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.pxToRem(15)};
`;
