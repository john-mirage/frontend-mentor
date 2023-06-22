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
    border-radius: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    cursor: pointer;
  }
`;

export const Thumbnails = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    display: grid;
    grid-template-columns: repeat(${(props) => props.thumbnailNumber}, 1fr);
    gap: 3rem;
    margin-top: 3rem;
  }
`;

const ctrlButton = css`
  position: absolute;
  z-index: 20;
  top: 50%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.color.neutral.white};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    display: none;
  }
`;

export const ctrlIcon = css`
  width: 1rem;
  height: auto;
  fill: none;
  stroke: ${(props) => props.theme.color.neutral.black};
`;

export const PreviousButton = styled(IconButton)`
  ${ctrlButton}
  left: 2rem;
`;

export const PreviousIcon = styled(IconPrevious)`
  ${ctrlIcon}
`;

export const NextButton = styled(IconButton)`
  ${ctrlButton}
  right: 2rem;
`;

export const NextIcon = styled(IconNext)`
  ${ctrlIcon}
`;
