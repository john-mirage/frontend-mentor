import styled from "styled-components";
import { screenReaderOnlyStyle } from "@frontend-mentor/common-styles";

export const Title = styled.h1`
  ${screenReaderOnlyStyle}
`;

export const Main = styled.main`
  padding: ${({ theme }) => `${theme.pxToRem(32)} ${theme.pxToRem(24)}`};

  @media screen and (min-width: 778px) {
    max-width: 778px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  display: grid;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;
