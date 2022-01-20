import styled from "styled-components";

const DrawerNavigation = styled.nav`

`;

const DrawerLink = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3.6rem;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const TopAppBarNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const TopAppBarLink = styled.a`
    position: relative;
    display: flex;
    height: 100%;
    margin-right: 3rem;

    &:last-child {
        margin-right: 0;
    }
`;

const TopAppBarText = styled.span`
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.darkGrayishBlue};

    ${TopAppBarLink}:hover & {
        color: ${props => props.theme.color.neutral.veryDarkBlue};
    }
`;

const TopAppBarLine = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: ${props => props.theme.color.primary.orange};

    ${TopAppBarLink}:hover & {
        display: block;
    }
`;

const links = ["Collections", "Men", "Women", "About", "Contact"];

function Navigation(props) {
    switch (props.type) {
        case "Drawer":
            return (
                <DrawerNavigation className={props.className}>
                    {links.map((link, index) =>
                        <DrawerLink key={index}>{link}</DrawerLink>
                    )}
                </DrawerNavigation>
            );
        case "TopAppBar":
            return (
                <TopAppBarNavigation className={props.className}>
                    {links.map((link, index) => (
                        <TopAppBarLink key={index}>
                            <TopAppBarText>{link}</TopAppBarText>
                            <TopAppBarLine />
                        </TopAppBarLink>
                    ))}
                </TopAppBarNavigation>
            );
    }
}

export default Navigation;