import { css } from "styled-components";

export const ScreenReaderOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const CardBase = css`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.white};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    min-height: auto;
    height: auto;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.pxToRem(24)};
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    border-radius: ${({ theme }) => theme.pxToRem(36)};
  }
`;

export const largeHeadingText = css`
  font-size: ${(props) => props.theme.pxToRem(56)};
  line-height: ${(props) => props.theme.pxToRem(56)};
  font-weight: 700;
  letter-spacing: 0;
`;

export const mediumHeadingText = css`
  font-size: ${(props) => props.theme.pxToRem(40)};
  line-height: ${(props) => props.theme.pxToRem(40)};
  font-weight: 700;
  letter-spacing: 0;
`;

export const bodyText = css`
  font-size: ${(props) => props.theme.pxToRem(16)};
  line-height: ${(props) => props.theme.pxToRem(24)};
  font-weight: 400;
  letter-spacing: 0;
`;

export const boldBodyText = css`
  font-size: ${(props) => props.theme.pxToRem(16)};
  line-height: ${(props) => props.theme.pxToRem(24)};
  font-weight: 700;
  letter-spacing: 0;
`;

export const smallBodyText = css`
  font-size: ${(props) => props.theme.pxToRem(12)};
  line-height: ${(props) => props.theme.pxToRem(18)};
  font-weight: 700;
  letter-spacing: 0;
`;
