import * as Styled from "./navigation.style";

const links = ["Collections", "Men", "Women", "About", "Contact"];

function Navigation({ className, type }) {
  switch (type) {
    case "Drawer":
      return (
        <DrawerNavigation className={className}>
          {links.map((link, index) => (
            <DrawerLink key={index}>{link}</DrawerLink>
          ))}
        </DrawerNavigation>
      );
    case "TopAppBar":
      return (
        <TopAppBarNavigation className={className}>
          {links.map((link, index) => (
            <TopAppBarLink key={index}>
              <TopAppBarText>{link}</TopAppBarText>
              <TopAppBarLine />
            </TopAppBarLink>
          ))}
        </TopAppBarNavigation>
      );
    default:
      return <div></div>;
  }
}

export default Navigation;
