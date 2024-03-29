import styled from "styled-components";
import { motion } from "framer-motion";
import BasePrice from "../price";
import BaseCountInput from "../count-input";
import BaseButton from "../button";
import { IconCart } from "../icons";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Company = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(12)};
  line-height: ${({ theme }) => theme.pxToRem(12)};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.846px;
  color: ${(props) => props.theme.color.primary.orange};
  margin-bottom: ${({ theme }) => theme.pxToRem(19)};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.pxToRem(28)};
  line-height: ${({ theme }) => theme.pxToRem(32)};
  font-weight: 700;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
  margin-bottom: ${({ theme }) => theme.pxToRem(15)};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    font-size: ${({ theme }) => theme.pxToRem(44)};
    line-height: ${({ theme }) => theme.pxToRem(48)};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(15)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.pxToRem(25)};
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
  margin-bottom: ${({ theme }) => theme.pxToRem(28)};
`;

export const Price = styled(BasePrice)`
  margin-bottom: ${({ theme }) => theme.pxToRem(20)};
`;

export const Form = styled.div`
  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CountInput = styled(BaseCountInput)`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    flex: none;
    width: ${({ theme }) => theme.pxToRem(157)};
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.pxToRem(20)};
  }
`;

export const CartButton = styled(BaseButton)`
  box-shadow: 0px 20px 50px -20px #ff7e1b;

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    flex: 1;
  }
`;

export const CartIcon = styled(IconCart)`
  margin-right: ${({ theme }) => theme.pxToRem(16)};
  width: ${({ theme }) => theme.pxToRem(20)};
  height: auto;
  color: ${(props) => props.theme.color.neutral.white};
`;

export const ErrorMessage = styled(motion.p)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + ${({ theme }) => theme.pxToRem(10)}));
  padding-left: ${({ theme }) => theme.pxToRem(20)};
  padding-right: ${({ theme }) => theme.pxToRem(20)};
  font-size: ${({ theme }) => theme.pxToRem(14)};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary.orange};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    padding: 0;
  }
`;
