import styled from "styled-components";
import IconButton from "../icon-button";
import { IconDelete } from "../icons";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.pxToRem(25)};
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    flex-direction: row;
    text-align: start;
  }
`;

export const Thumbnail = styled.img`
  flex: 0 0 ${({ theme }) => theme.pxToRem(50)};
  width: ${({ theme }) => theme.pxToRem(50)};
  height: ${({ theme }) => theme.pxToRem(50)};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  margin-bottom: ${({ theme }) => theme.pxToRem(10)};

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    margin-right: ${({ theme }) => theme.pxToRem(20)};
    margin-bottom: 0;
  }
`;

export const Info = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ theme }) => theme.pxToRem(50)};
  padding-top: ${({ theme }) => theme.pxToRem(2)};
  padding-bottom: ${({ theme }) => theme.pxToRem(2)};
  margin-bottom: ${({ theme }) => theme.pxToRem(10)};

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    margin-right: ${({ theme }) => theme.pxToRem(20)};
    margin-bottom: 0;
  }
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 400;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 400;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const DeleteButton = styled(IconButton)`
  flex: 0 0 ${({ theme }) => theme.pxToRem(48)};
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    margin-right: ${({ theme }) => theme.pxToRem(-17)};
  }
`;

export const DeleteIcon = styled(IconDelete)`
  width: ${({ theme }) => theme.pxToRem(14)};
  height: auto;
  fill: ${(props) => props.theme.color.neutral.grayishBlue};
`;
