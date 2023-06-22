import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 1.4rem;
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.color.primary.orange};
  padding-left: 0.7rem;
  padding-right: 0.7rem;
`;

export const Label = styled.span`
  margin: auto;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.white};
`;
