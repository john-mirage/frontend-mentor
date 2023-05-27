import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: ${(props) =>
    `${props.theme.pxToRem(16)} ${props.theme.pxToRem(24)}`};
  background-color: ${(props) => props.theme.color.darkSlateGrey};
  border-radius: ${(props) => props.theme.pxToRem(8)};
  font-size: ${(props) => props.theme.pxToRem(16)};
  line-height: ${(props) => props.theme.pxToRem(24)};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.white};
`;
