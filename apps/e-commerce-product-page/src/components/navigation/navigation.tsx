import * as Styled from "./navigation.style";

const links = ["Collections", "Men", "Women", "About", "Contact"];

interface NavigationProps {
  className?: string;
  isTopAppBar: boolean;
}

function Navigation({ className, isTopAppBar }: NavigationProps) {
  if (isTopAppBar) {
    return (
      <Styled.TopAppBarNavigation className={className}>
        {links.map((link, index) => (
          <Styled.TopAppBarLink key={index}>
            <Styled.TopAppBarText>{link}</Styled.TopAppBarText>
            <Styled.TopAppBarLine />
          </Styled.TopAppBarLink>
        ))}
      </Styled.TopAppBarNavigation>
    );
  } else {
    return (
      <Styled.DrawerNavigation className={className}>
        {links.map((link, index) => (
          <Styled.DrawerLink key={index}>{link}</Styled.DrawerLink>
        ))}
      </Styled.DrawerNavigation>
    );
  }
}

export default Navigation;
