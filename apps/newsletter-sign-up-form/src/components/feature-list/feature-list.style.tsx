import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: ${(props) => props.theme.pxToRem(10)};
`;
