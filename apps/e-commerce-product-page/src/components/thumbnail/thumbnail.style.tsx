import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.li)`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
  cursor: pointer;
`;

export const layer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled(motion.div)`
  ${layer}
  z-index: 50;
  background-color: ${(props) => props.theme.color.primary.orange};
  border-radius: ${({ theme }) => theme.pxToRem(12)};
`;

export const Image = styled.img`
  ${layer}
  z-index: 60;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.pxToRem(10)};
`;

export const Overlay = styled(motion.div)`
  ${layer}
  z-index: 70;
  border-radius: ${({ theme }) => theme.pxToRem(10)};
  background-color: rgba(255, 255, 255, 0.5);
`;
