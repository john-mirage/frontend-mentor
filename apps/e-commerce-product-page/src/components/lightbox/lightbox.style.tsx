import styled, { css } from "styled-components";
import IconButton from "../icon-button";
import BaseSlider from "../slider";
import { IconClose, IconPrevious, IconNext } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 12rem;
  padding-bottom: 5rem;
`;

export const Dialog = styled.div`
  position: relative;
  width: 70rem;
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
  border-radius: 2rem;
`;

interface ThumbnailsProps {
  thumbnailNumber: number;
}

export const Thumbnails = styled.ul<ThumbnailsProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.thumbnailNumber}, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  padding-left: 6rem;
  padding-right: 6rem;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: -1rem;
  right: 0;
  transform: translateY(-100%);
  width: 6rem;
  height: 6rem;
  margin-right: -2rem;
`;

export const CloseIcon = styled(IconClose)`
  width: 2rem;
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
  width: 1.2rem;
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
