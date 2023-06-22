import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: ${({ theme }) => theme.pxToRem(48)};
  height: ${({ theme }) => theme.pxToRem(48)};
  border-radius: 50%;
  transition: background-color 300ms;
  padding: 0;
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    &:hover {
      background-color: ${(props) => props.theme.color.primary.orange};
    }
  }
`;

export const Image = styled.img`
  margin: auto;
  width: ${({ theme }) => theme.pxToRem(26)};
  height: ${({ theme }) => theme.pxToRem(26)};

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: ${({ theme }) => theme.pxToRem(44)};
    height: ${({ theme }) => theme.pxToRem(44)};
  }
`;
