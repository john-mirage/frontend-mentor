import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
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
  width: 2.6rem;
  height: 2.6rem;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: 4.4rem;
    height: 4.4rem;
  }
`;
