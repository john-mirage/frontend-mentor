import styled from "styled-components";

export const DrawerNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const DrawerLink = styled.a`
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.pxToRem(36)};
  color: ${(props) => props.theme.color.neutral.veryDarkBlue};
  text-decoration: none;

  @media screen and (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TopAppBarNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.pxToRem(32)};
  height: 100%;
  overflow-y: hidden;
`;

export const TopAppBarLink = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  text-decoration: none;
`;

export const TopAppBarText = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  font-size: ${({ theme }) => theme.pxToRem(15)};
  line-height: ${({ theme }) => theme.pxToRem(26)};
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
  height: ${({ theme }) => theme.pxToRem(4)};
  background-color: ${(props) => props.theme.color.primary.orange};
  transform: translateY(${({ theme }) => theme.pxToRem(4)});

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: transform;
    transition-duration: 150ms;
  }

  @media screen and (hover: hover) {
    ${TopAppBarLink}:hover & {
      transform: translateY(0);
    }
  }
`;
