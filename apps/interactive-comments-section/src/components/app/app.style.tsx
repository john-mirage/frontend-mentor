import { srOnlyMixin } from "../../styles/mixins";
import styled from "styled-components";

export const Title = styled.h1`
  ${srOnlyMixin}
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
