import styled from "styled-components";
import { screenReaderOnlyStyle } from "@frontend-mentor/common-styles";
import BaseTopAppBar from "../top-app-bar";
import BaseGallery from "../gallery";
import BaseProduct from "../product";
import BaseDrawer from "../drawer";
import BaseLightbox from "../lightbox";
import { motion } from "framer-motion";

export const Title = styled.h1`
  ${screenReaderOnlyStyle}
`;

export const Container = styled.main`
  width: 100%;
  height: auto;
  padding-top: ${({ theme }) => theme.pxToRem(68)};
  padding-bottom: ${({ theme }) => theme.pxToRem(88)};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    width: ${({ theme }) => theme.pxToRem(540)};
    margin-left: auto;
    margin-right: auto;
    padding-top: ${({ theme }) => theme.pxToRem(150)};
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    padding-top: 0;
    width: ${({ theme }) => theme.pxToRem(960)};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    width: ${({ theme }) => theme.pxToRem(1140)};
  }
`;

export const TopAppBar = styled(BaseTopAppBar)`
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    position: relative;
    margin-bottom: ${({ theme }) => theme.pxToRem(100)};
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  }
`;

export const Gallery = styled(BaseGallery)`
  margin-bottom: ${({ theme }) => theme.pxToRem(30)};

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: 50%;
    padding-left: ${({ theme }) => theme.pxToRem(40)};
    padding-right: ${({ theme }) => theme.pxToRem(80)};
    margin-bottom: 0;
  }
`;

export const Product = styled(BaseProduct)`
  padding-left: ${({ theme }) => theme.pxToRem(20)};
  padding-right: ${({ theme }) => theme.pxToRem(20)};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: 50%;
    padding-right: ${({ theme }) => theme.pxToRem(40)};
  }
`;

export const Drawer = styled(motion(BaseDrawer))`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const Lightbox = styled(motion(BaseLightbox))`
  position: fixed;
  display: flex;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Scrim = styled(motion.div)`
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.neutral.black};
`;
