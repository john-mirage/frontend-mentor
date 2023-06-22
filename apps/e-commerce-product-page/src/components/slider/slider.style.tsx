import styled from "styled-components";
import { motion } from "framer-motion";

const Image = styled(motion.img)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
