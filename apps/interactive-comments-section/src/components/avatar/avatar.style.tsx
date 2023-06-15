import styled from "styled-components";

export const Image = styled.img`
  width: ${({ theme }) => theme.pxToRem(32)};
  height: ${({ theme }) => theme.pxToRem(32)};
  border-radius: 9999px;
`;
