import styled from "styled-components";
import { motion } from "framer-motion";
import BasePrice from "../price";
import BaseCountInput from "../count-input";
import BaseButton from "../button";
import { IconCart } from "../icons";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const Company = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.primary.orange};
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    font-size: 4.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
  margin-bottom: 2.4rem;
`;

const Price = styled(BasePrice)`
  margin-bottom: 2rem;
`;

const Form = styled.div`
  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CountInput = styled(BaseCountInput)`
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    flex: 1 1 35%;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const CartButton = styled(BaseButton)`
  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    flex: 1 1 65%;
  }
`;

const CartIcon = styled(IconCart)`
  margin-right: 1.6rem;
  width: 2rem;
  height: auto;
  fill: ${(props) => props.theme.color.neutral.white};
`;

const ErrorMessage = styled(motion.p)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 1rem));
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.primary.orange};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    padding: 0;
  }
`;
