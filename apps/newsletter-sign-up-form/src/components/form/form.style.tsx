import styled, { css } from "styled-components";
import { bodyText, smallBodyText } from "../../styles/styled-components.mixins";

interface InputProps {
  readonly hasError: boolean;
}

export const Container = styled.label`
  margin-bottom: ${(props) => props.theme.pxToRem(24)};
  display: block;
`;

export const Row = styled.span`
  margin-bottom: ${(props) => props.theme.pxToRem(8)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  ${smallBodyText}
  color: ${(props) => props.theme.color.darkSlateGrey};
`;

export const Error = styled(Label)`
  color: ${(props) => props.theme.color.tomato};
`;

export const Input = styled.input<InputProps>`
  ${bodyText}
  width: 100%;
  padding: ${(props) =>
    `${props.theme.pxToRem(16)} ${props.theme.pxToRem(24)}`};
  border-radius: ${(props) => props.theme.pxToRem(8)};
  border: ${(props) => props.theme.pxToRem(1)} solid
    ${(props) =>
      props.hasError ? props.theme.color.tomato : props.theme.color.border};
  color: ${(props) =>
    props.hasError
      ? props.theme.color.tomato
      : props.theme.color.darkSlateGrey};
  ${(props) =>
    props.hasError &&
    css`
      background-color: ${props.theme.color.lightTomato};
    `}

  &:focus-visible {
    outline: ${(props) => props.theme.pxToRem(1)} solid
      ${(props) =>
        props.hasError
          ? props.theme.color.tomato
          : props.theme.color.darkSlateGrey};
  }
`;
