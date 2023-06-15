import { bodyMediumMixin } from "../../styles/fonts";
import { cardMixin } from "../../styles/mixins";
import styled from "styled-components";

export const Form = styled.form`
  ${cardMixin}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const TextInput = styled.textarea`
  ${bodyMediumMixin}
  width: 100%;
  min-height: ${({ theme }) => theme.pxToRem(96)};
  padding: ${({ theme }) => `${theme.pxToRem(12)} ${theme.pxToRem(24)}`};
  border: ${({ theme }) => theme.pxToRem(1)} solid
    ${({ theme }) => theme.color.lightGray};
  border-radius: ${({ theme }) => theme.pxToRem(8)};
  color: ${({ theme }) => theme.color.grayishBlue};
  resize: vertical;

  &:focus-visible {
    outline: ${({ theme }) => theme.pxToRem(1)} solid
      ${({ theme }) => theme.color.moderateBlue};
  }
`;
