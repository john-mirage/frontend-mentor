import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { IconNext, IconPrevious } from "../icons";

interface hasLightboxStateProps {
  $isLightbox: boolean;
}

export const SliderContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  position: relative;
`;

export const Thumbnails = styled.div<hasLightboxStateProps>`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    display: block;
    ${({ $isLightbox }) =>
      $isLightbox &&
      css`
        padding-left: 52px;
        padding-right: 52px;
      `}
  }
`;

export const Slider = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    border-radius: ${({ theme }) => theme.pxToRem(15)};
    overflow: hidden;
  }
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

const PositionButton = styled.button<hasLightboxStateProps>`
  position: absolute;
  z-index: 20;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ $isLightbox }) => ($isLightbox ? "56px" : "40px")};
  height: ${({ $isLightbox }) => ($isLightbox ? "56px" : "40px")};
  border-radius: 9999px;
  border: none;
  padding: 0;
  cursor: pointer;

  ${({ $isLightbox }) =>
    !$isLightbox &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        display: none;
      }
    `}
`;

const PositionIcon = css`
  height: ${({ theme }) => theme.pxToRem(12)};
`;

export const NextIcon = styled(IconNext)`
  ${PositionIcon}
`;

export const PreviousIcon = styled(IconPrevious)`
  ${PositionIcon}
`;

export const LeftButton = styled(PositionButton)`
  left: ${({ $isLightbox }) => ($isLightbox ? "-28px" : "16px")};
`;

export const RightButton = styled(PositionButton)`
  right: ${({ $isLightbox }) => ($isLightbox ? "-28px" : "16px")};
`;
