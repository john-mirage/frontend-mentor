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
  margin-bottom: 2.5rem;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    flex-direction: row;
    text-align: start;
  }
`;

export const Thumbnail = styled.img`
  flex: 0 0 5rem;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

export const Info = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const DeleteButton = styled(IconButton)`
  flex: 0 0 4.8rem;
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${(props) => props.theme.screen.cart}) {
    margin-right: -1.7rem;
  }
`;

export const DeleteIcon = styled(IconDelete)`
  width: 1.4rem;
  height: auto;
  fill: ${(props) => props.theme.color.neutral.grayishBlue};
`;
