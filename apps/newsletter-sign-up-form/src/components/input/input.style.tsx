import styled from "styled-components";

export const Container = styled.label`
  display: block;
`;

export const Label = styled.span`
  margin-bottom: ${(props) => props.theme.pxToRem(8)};
  display: block;
  font-size: ${(props) => props.theme.pxToRem(12)};
  line-height: ${(props) => props.theme.pxToRem(18)};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.darkSlateGrey};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${(props) =>
    `${props.theme.pxToRem(16)} ${props.theme.pxToRem(24)}`};
  border-radius: ${(props) => props.theme.pxToRem(8)};
  border: ${(props) => props.theme.pxToRem(1)} solid
    ${(props) => props.theme.color.border};
  font-size: ${(props) => props.theme.pxToRem(16)};
  line-height: ${(props) => props.theme.pxToRem(24)};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.darkSlateGrey};
`;
