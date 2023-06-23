import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.pxToRem(360)};
  min-height: ${({ theme }) => theme.pxToRem(250)};
  border-radius: ${({ theme }) => theme.pxToRem(10)};
  background-color: ${({ theme }) => theme.color.neutral.white};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const Header = styled.header`
  flex: 0 0 ${({ theme }) => theme.pxToRem(60)};
  padding-left: ${({ theme }) => theme.pxToRem(24)};
  padding-right: ${({ theme }) => theme.pxToRem(24)};
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.pxToRem(60)};
  color: ${({ theme }) => theme.color.neutral.veryDarkBlue};
`;

export const Body = styled.div`
  flex: 1 1 0;
  display: flex;
  padding: ${({ theme }) => theme.pxToRem(24)};
`;

export const EmptyCartText = styled.p`
  width: 100%;
  height: auto;
  margin: auto;
  text-align: center;
  font-size: ${({ theme }) => theme.pxToRem(14)};
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.darkGrayishBlue};
`;
