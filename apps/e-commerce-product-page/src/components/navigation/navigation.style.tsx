import styled from "styled-components";

export const DrawerNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const DrawerLink = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 3.6rem;
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
`;

export const TopAppBarNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-y: hidden;
`;

export const TopAppBarLink = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  margin-right: 3rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const TopAppBarText = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.neutral.darkGrayishBlue};

  ${TopAppBarLink}:hover & {
    color: ${(props) => props.theme.color.neutral.veryDarkBlue};
  }
`;

export const TopAppBarLine = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.4rem;
  background-color: ${(props) => props.theme.color.primary.orange};
  transform: translateY(0.4rem);
  transition: transform 300ms;

  ${TopAppBarLink}:hover & {
    transform: translateY(0);
  }
`;
