import styled from "styled-components";
import { Logo as BaseLogo, IconMenu, IconCart } from "../icons";
import IconButton from "../icon-button";
import BaseNavigation from "../navigation";
import { motion } from "framer-motion";
import BaseBadge from "../badge";
import BaseProfileButton from "../profile-button";

const Container = styled.header`
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

const Logo = styled(BaseLogo)`
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

const MenuButton = styled(IconButton)`
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

const MenuIcon = styled(IconMenu)`
  width: 1.4rem;
  height: auto;
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

const CartButton = styled(IconButton)`
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

const CartIcon = styled(IconCart)`
  width: 2rem;
  fill: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

const Navigation = styled(BaseNavigation)`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    display: flex;
  }
`;

const Badge = styled(motion(BaseBadge))`
  position: absolute;
  top: 0.6rem;
  right: 0.4rem;
`;

const ProfileButton = styled(BaseProfileButton)`
  flex: 0 0 4.8rem;
  margin-right: -1.2rem;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    margin-right: 0;
  }
`;
