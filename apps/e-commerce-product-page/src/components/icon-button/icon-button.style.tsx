import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  display: flex;
  width: ${({ theme }) => theme.pxToRem(48)};
  height: ${({ theme }) => theme.pxToRem(48)};
  border-radius: 50%;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export const Icon = styled.div`
  margin: auto;
`;
