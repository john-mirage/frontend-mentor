import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

export const CurrentPrice = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(28)};
  line-height: ${({ theme }) => theme.pxToRem(28)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
  margin-right: ${({ theme }) => theme.pxToRem(16)};
`;

export const Discount = styled.p`
  padding: ${({ theme }) => `${theme.pxToRem(4)} ${theme.pxToRem(8)}`};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary.orange};
  background-color: ${(props) => props.theme.color.primary.paleOrange};
`;

export const InitialPrice = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  line-height: ${({ theme }) => theme.pxToRem(26)};
  font-weight: 700;
  text-decoration-line: line-through;
  color: ${(props) => props.theme.color.neutral.grayishBlue};
  margin-left: auto;

  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    margin-top: ${({ theme }) => theme.pxToRem(10)};
    width: 100%;
  }
`;
