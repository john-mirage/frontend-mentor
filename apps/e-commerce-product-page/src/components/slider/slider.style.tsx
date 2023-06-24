import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  border-radius: ${({ theme }) => theme.pxToRem(15)};
  overflow: hidden;
`;

export const Image = styled(motion.img)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
