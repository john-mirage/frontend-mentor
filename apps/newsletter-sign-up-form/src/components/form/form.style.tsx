import styled from "styled-components";
import BaseInput from "../input";

export const Input = styled(BaseInput)`
  margin-bottom: ${(props) => props.theme.pxToRem(24)};
`;
