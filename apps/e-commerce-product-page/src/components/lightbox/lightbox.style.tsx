import styled, { css } from "styled-components";
import IconButton from "../icon-button";
import BaseSlider from "../slider";
import { IconClose, IconPrevious, IconNext } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: ${({ theme }) => theme.pxToRem(120)};
  padding-bottom: ${({ theme }) => theme.pxToRem(50)};
`;

export const Dialog = styled.div`
  position: relative;
  width: ${({ theme }) => theme.pxToRem(700)};
  height: auto;
  margin: auto;
`;

export const Featured = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
`;

export const Slider = styled(BaseSlider)`
  border-radius: ${({ theme }) => theme.pxToRem(20)};
`;

interface ThumbnailsProps {
  thumbnailNumber: number;
}

export const Thumbnails = styled.ul<ThumbnailsProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.thumbnailNumber}, 1fr);
  gap: ${({ theme }) => theme.pxToRem(30)};
  margin-top: ${({ theme }) => theme.pxToRem(30)};
  padding-left: ${({ theme }) => theme.pxToRem(60)};
  padding-right: ${({ theme }) => theme.pxToRem(60)};
  list-style: none;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme }) => theme.pxToRem(-10)};
  right: 0;
  transform: translateY(-100%);
  width: ${({ theme }) => theme.pxToRem(60)};
  height: ${({ theme }) => theme.pxToRem(60)};
  margin-right: ${({ theme }) => theme.pxToRem(-20)};
`;

export const CloseIcon = styled(IconClose)`
  width: ${({ theme }) => theme.pxToRem(20)};
  height: auto;
  fill: ${(props) => props.theme.color.neutral.white};
  transition: fill 300ms;

  ${CloseButton}:hover & {
    fill: ${(props) => props.theme.color.primary.orange};
  }
`;

const ctrlButton = css`
  position: absolute;
  z-index: 20;
  top: 50%;
  background-color: ${(props) => props.theme.color.neutral.white};
`;

const ctrlIcon = css`
  width: ${({ theme }) => theme.pxToRem(12)};
  height: auto;
  fill: none;
  stroke: ${(props) => props.theme.color.neutral.black};
  transition: stroke 300ms;
`;

export const PreviousButton = styled(IconButton)`
  ${ctrlButton}
  left: 0;
  transform: translate(-50%, -50%);
`;

export const PreviousIcon = styled(IconPrevious)`
  ${ctrlIcon}

  ${PreviousButton}:hover & {
    stroke: ${(props) => props.theme.color.primary.orange};
  }
`;

export const NextButton = styled(IconButton)`
  ${ctrlButton}
  right: 0;
  transform: translate(50%, -50%);
`;

export const NextIcon = styled(IconNext)`
  ${ctrlIcon}

  ${NextButton}:hover & {
    stroke: ${(props) => props.theme.color.primary.orange};
  }
`;
