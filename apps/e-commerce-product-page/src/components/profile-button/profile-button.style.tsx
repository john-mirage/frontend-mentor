import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: ${({ theme }) => theme.pxToRem(48)};
  height: ${({ theme }) => theme.pxToRem(48)};
  border-radius: 50%;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: background-color;
    transition-duration: 150ms;
  }

  @media screen and (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.color.neutral.lightGrayishBlue};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    @media screen and (hover: hover) {
      &:hover {
        background-color: ${(props) => props.theme.color.primary.orange};
      }
    }
  }
`;

export const Image = styled.img`
  margin: auto;
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: ${({ theme }) => theme.pxToRem(44)};
    height: ${({ theme }) => theme.pxToRem(44)};
  }
`;
