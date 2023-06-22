import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.primary.orange};
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.color.primary.orange};
  cursor: pointer;
  transition: opacity 300ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const Label = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.white};
`;
