import styled from "styled-components";
import FeatureList from "../feature-list";

export const Card = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
`;

export const Body = styled.div`
  padding: ${(props) =>
    `${props.theme.pxToRem(40)} ${props.theme.pxToRem(24)}`};
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.pxToRem(24)};
  font-size: ${(props) => props.theme.pxToRem(40)};
  line-height: ${(props) => props.theme.pxToRem(40)};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.darkSlateGrey};
`;

export const Subtitle = styled.p`
  margin-bottom: ${(props) => props.theme.pxToRem(24)};
  font-size: ${(props) => props.theme.pxToRem(16)};
  line-height: ${(props) => props.theme.pxToRem(24)};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.darkSlateGrey};
`;

export const List = styled(FeatureList)`
  margin-bottom: ${(props) => props.theme.pxToRem(40)};
`;
