import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  height: ${({ theme }) => theme.pxToRem(14)};
  border-radius: ${({ theme }) => theme.pxToRem(7)};
  background-color: ${({ theme }) => theme.color.primary.orange};
  padding-left: ${({ theme }) => theme.pxToRem(7)};
  padding-right: ${({ theme }) => theme.pxToRem(7)};
`;

export const Label = styled.span`
  margin: auto;
  font-size: ${({ theme }) => theme.pxToRem(10)};
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.white};
`;
