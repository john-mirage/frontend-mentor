import styled from "styled-components";
import { IconSuccess } from "../icons";

export const Icon = styled(IconSuccess)`
  margin-bottom: ${({ theme }) => theme.pxToRem(40)};
  width: ${({ theme }) => theme.pxToRem(64)};
  height: ${({ theme }) => theme.pxToRem(64)};
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  font-size: ${({ theme }) => theme.pxToRem(40)};
  line-height: ${({ theme }) => theme.pxToRem(40)};
  font-weight: 700;
  letter-spacing: 0;
  color: ${({ theme }) => theme.color.darkSlateGrey};
`;

export const Subtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  font-size: ${({ theme }) => theme.pxToRem(16)};
  line-height: ${({ theme }) => theme.pxToRem(24)};
  font-weight: 400;
  letter-spacing: 0;
  color: ${({ theme }) => theme.color.darkSlateGrey};
`;

export const Email = styled.span`
  font-weight: 700;
`;
