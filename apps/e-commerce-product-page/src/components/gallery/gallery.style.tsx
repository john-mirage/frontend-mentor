import styled, { css } from "styled-components";
import IconButton from "../icon-button";
import { IconPrevious, IconNext } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Featured = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    border-radius: ${({ theme }) => theme.pxToRem(20)};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    cursor: pointer;
  }
`;

interface ThumbnailsProps {
  thumbnailNumber: number;
}

export const Thumbnails = styled.ul<ThumbnailsProps>`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    display: grid;
    grid-template-columns: repeat(${(props) => props.thumbnailNumber}, 1fr);
    gap: ${({ theme }) => theme.pxToRem(30)};
    margin-top: ${({ theme }) => theme.pxToRem(30)};
    list-style: none;
    padding: 0;
  }
`;

const ctrlButton = css`
  position: absolute;
  z-index: 20;
  top: 50%;
  width: ${({ theme }) => theme.pxToRem(40)};
  height: ${({ theme }) => theme.pxToRem(40)};
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.color.neutral.white};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    display: none;
  }
`;

export const ctrlIcon = css`
  width: ${({ theme }) => theme.pxToRem(10)};
  height: auto;
  fill: none;
  stroke: ${(props) => props.theme.color.neutral.black};
`;

export const PreviousButton = styled(IconButton)`
  ${ctrlButton}
  left: ${({ theme }) => theme.pxToRem(20)};
`;

export const PreviousIcon = styled(IconPrevious)`
  ${ctrlIcon}
`;

export const NextButton = styled(IconButton)`
  ${ctrlButton}
  right: ${({ theme }) => theme.pxToRem(20)};
`;

export const NextIcon = styled(IconNext)`
  ${ctrlIcon}
`;
