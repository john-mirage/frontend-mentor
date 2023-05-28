import styled from "styled-components";

export const App = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.white};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${(props) =>
      `${props.theme.pxToRem(48)} ${props.theme.pxToRem(24)}`};
    background-color: ${(props) => props.theme.color.charcoalGrey};
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    padding: ${(props) =>
      `${props.theme.pxToRem(64)} ${props.theme.pxToRem(32)}`};
  }
`;
