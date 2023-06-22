import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 25rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.neutral.white};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const Header = styled.header`
  flex: 0 0 6rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 6rem;
  color: ${({ theme }) => theme.color.neutral.veryDarkBlue};
`;

export const Body = styled.div`
  flex: 1 1 0;
  display: flex;
  padding: 2.4rem;
`;

export const EmptyCartText = styled.p`
  width: 100%;
  height: auto;
  margin: auto;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.darkGrayishBlue};
`;
