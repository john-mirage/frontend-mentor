import styled from "styled-components";
import FeatureList from "../feature-list";
import {
  mediumHeadingText,
  bodyText,
  largeHeadingText,
  CardBase,
} from "../../styles/styled-components.mixins";
import { motion } from "framer-motion";

export const Card = styled(motion.article)`
  ${CardBase}

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: ${({ theme }) => theme.pxToRem(528)};
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: ${(props) => props.theme.pxToRem(928)};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

export const Picture = styled.picture`
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    order: 2;
    flex: none;
    width: ${({ theme }) => theme.pxToRem(424)};
    padding-top: ${({ theme }) => theme.pxToRem(24)};
    padding-bottom: ${({ theme }) => theme.pxToRem(24)};
    padding-right: ${({ theme }) => theme.pxToRem(24)};
  }
`;

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.pxToRem(16)};
  }
`;

export const Body = styled.div`
  padding: ${(props) =>
    `${props.theme.pxToRem(40)} ${props.theme.pxToRem(24)}`};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    padding: ${({ theme }) => theme.pxToRem(64)};
  }

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    order: 1;
    flex: 1;
    padding: ${(props) =>
      `${props.theme.pxToRem(96)} ${props.theme.pxToRem(64)}`};
  }
`;

export const Title = styled.h2`
  ${mediumHeadingText}
  margin-bottom: ${(props) => props.theme.pxToRem(24)};
  color: ${(props) => props.theme.color.darkSlateGrey};

  @media screen and (min-width: ${(props) => props.theme.screen.sm}) {
    ${largeHeadingText}
  }
`;

export const Subtitle = styled.p`
  ${bodyText}
  margin-bottom: ${(props) => props.theme.pxToRem(24)};
  color: ${(props) => props.theme.color.darkSlateGrey};
`;

export const List = styled(FeatureList)`
  margin-bottom: ${(props) => props.theme.pxToRem(40)};
`;
