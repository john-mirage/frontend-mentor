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
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
  margin-right: 1.6rem;
`;

export const Discount = styled.p`
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primary.orange};
  background-color: ${(props) => props.theme.color.primary.paleOrange};
`;

export const InitialPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration-line: line-through;
  color: ${(props) => props.theme.color.neutral.grayishBlue};
  margin-left: auto;

  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    margin-top: 1rem;
    width: 100%;
  }
`;
