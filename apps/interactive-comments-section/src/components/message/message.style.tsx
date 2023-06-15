import {
  badgeMixin,
  bodyMediumMixin,
  headingMediumMixin,
} from "../../styles/fonts";
import styled from "styled-components";
import BaseCounter from "../counter";
import { cardMixin } from "../../styles/mixins";

export const Container = styled.div`
  ${cardMixin}
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const Username = styled.p`
  ${headingMediumMixin}
  color: ${({ theme }) => theme.color.darkBlue};
`;

export const Badge = styled.p`
  ${badgeMixin}
  margin-left: ${({ theme }) => theme.pxToRem(-8)};
  padding: ${({ theme }) =>
    `${theme.pxToRem(1)} ${theme.pxToRem(6)} ${theme.pxToRem(
      3
    )} ${theme.pxToRem(6)}`};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.moderateBlue};
  border-radius: ${({ theme }) => theme.pxToRem(2)};
`;

export const Date = styled.p`
  ${bodyMediumMixin}
  color: ${({ theme }) => theme.color.grayishBlue};
`;

export const Content = styled.p`
  ${bodyMediumMixin}
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  color: ${({ theme }) => theme.color.grayishBlue};
`;

export const ReplyingTo = styled.span`
  ${headingMediumMixin}
  color: ${({ theme }) => theme.color.moderateBlue};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const Counter = styled(BaseCounter)`
  margin-right: auto;
`;
