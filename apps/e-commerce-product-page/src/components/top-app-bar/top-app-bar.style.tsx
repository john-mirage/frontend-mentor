import styled from "styled-components";
import { Logo as BaseLogo, IconMenu, IconCart } from "../icons";
import IconButton from "../icon-button";
import BaseNavigation from "../navigation";
import { motion } from "framer-motion";
import BaseBadge from "../badge";
import BaseProfileButton from "../profile-button";

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(70)};
  background-color: ${(props) => props.theme.color.neutral.white};

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    height: ${({ theme }) => theme.pxToRem(120)};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const LeftSection = styled(Section)`
  flex: 1;
  justify-content: flex-start;
`;

export const RightSection = styled(Section)`
  flex: 0;
  justify-content: flex-end;
`;

export const Logo = styled(BaseLogo)`
  flex: 0 1 auto;
  width: ${({ theme }) => theme.pxToRem(100)};
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
  margin-right: ${({ theme }) => theme.pxToRem(10)};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    width: ${({ theme }) => theme.pxToRem(120)};
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: ${({ theme }) => theme.pxToRem(160)};
    margin-right: ${({ theme }) => theme.pxToRem(60)};
  }
`;

export const MenuButton = styled(IconButton)`
  flex: 0 0 ${({ theme }) => theme.pxToRem(48)};
  margin-left: ${({ theme }) => theme.pxToRem(-16)};
  margin-right: ${({ theme }) => theme.pxToRem(4)};
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    display: none;
  }
`;

export const MenuIcon = styled(IconMenu)`
  width: ${({ theme }) => theme.pxToRem(14)};
  height: auto;
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const CartButton = styled(IconButton)`
  flex: 0 0 ${({ theme }) => theme.pxToRem(48)};
  margin-left: auto;
  margin-right: ${({ theme }) => theme.pxToRem(4)};
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    margin-right: ${({ theme }) => theme.pxToRem(25)};
  }
`;

export const CartIcon = styled(IconCart)`
  width: ${({ theme }) => theme.pxToRem(20)};
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const Navigation = styled(BaseNavigation)`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    display: flex;
  }
`;

export const Badge = styled(motion(BaseBadge))`
  position: absolute;
  top: ${({ theme }) => theme.pxToRem(6)};
  right: ${({ theme }) => theme.pxToRem(4)};
`;

export const ProfileButton = styled(BaseProfileButton)`
  flex: 0 0 ${({ theme }) => theme.pxToRem(48)};
  margin-right: ${({ theme }) => theme.pxToRem(-12)};

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    margin-right: 0;
  }
`;
