import styled from "styled-components";
import { IconSuccess } from "../icons";
import { bodyText } from "../../styles/styled-components.mixins";

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
  ${bodyText}
  flex: 1;
  color: ${(props) => props.theme.color.darkSlateGrey};
`;
