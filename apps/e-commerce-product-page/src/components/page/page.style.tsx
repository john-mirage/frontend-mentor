import styled from "styled-components";
import BaseTopAppBar from "../top-app-bar";
import BaseGallery from "../gallery";
import BaseProduct from "../product";
import BaseDrawer from "../drawer";
import BaseLightbox from "../lightbox";
import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100%;
  height: auto;
  padding-top: 7rem;
  padding-bottom: 14rem;

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    width: 54rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15rem;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    padding-top: 0;
    width: 96rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.xl}) {
    width: 114rem;
  }
`;

export const TopAppBar = styled(BaseTopAppBar)`
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    position: relative;
    margin-bottom: 10rem;
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  }
`;

export const Gallery = styled(BaseGallery)`
  margin-bottom: 3rem;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: 50%;
    padding-left: 4rem;
    padding-right: 8rem;
    margin-bottom: 0;
  }
`;

export const Product = styled(BaseProduct)`
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    width: 50%;
    padding-right: 4rem;
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
