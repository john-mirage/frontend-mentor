import styled from "styled-components";
import { IconSuccess } from "../icons";

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.theme.pxToRem(16)};
`;

export const Icon = styled(IconSuccess)`
  flex: none;
  width: ${(props) => props.theme.pxToRem(21)};
  height: ${(props) => props.theme.pxToRem(21)};
`;

export const Text = styled.p`
  flex: 1;
  font-size: ${(props) => props.theme.pxToRem(16)};
  line-height: ${(props) => props.theme.pxToRem(24)};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.darkSlateGrey};
`;
