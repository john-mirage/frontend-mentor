import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(60)};
  border-radius: ${({ theme }) => theme.pxToRem(10)};
  background-color: ${({ theme }) => theme.color.primary.orange};
  cursor: pointer;
  transition: opacity 300ms;
  border: none;
  padding: 0;

  &:hover {
    opacity: 0.6;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.white};
`;
