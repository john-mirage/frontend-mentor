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
  height: 7rem;
  background-color: ${(props) => props.theme.color.neutral.white};

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    height: 12rem;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const LeftSection = styled(Section)`
  justify-content: flex-start;
`;

export const MiddleSection = styled(Section)`
  justify-content: center;
`;

export const RightSection = styled(Section)`
  justify-content: flex-end;
`;

export const Logo = styled(BaseLogo)`
  flex: 0 1 auto;
  width: 10rem;
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
  margin-right: 1rem;

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    width: 12rem;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: 16rem;
    margin-right: 6rem;
  }
`;

export const MenuButton = styled(IconButton)`
  flex: 0 0 4.8rem;
  margin-left: -1.6rem;
  margin-right: 0.4rem;
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    display: none;
  }
`;

export const MenuIcon = styled(IconMenu)`
  width: 1.4rem;
  height: auto;
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const CartButton = styled(IconButton)`
  flex: 0 0 4.8rem;
  margin-left: auto;
  margin-right: 0.4rem;
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    margin-right: 2.5rem;
  }
`;

export const CartIcon = styled(IconCart)`
  width: 2rem;
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
  top: 0.6rem;
  right: 0.4rem;
`;

export const ProfileButton = styled(BaseProfileButton)`
  flex: 0 0 4.8rem;
  margin-right: -1.2rem;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    margin-right: 0;
  }
`;
