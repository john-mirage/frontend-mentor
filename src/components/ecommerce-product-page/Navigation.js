import styled from "styled-components";

const Container = styled.nav`
    display: flex;
    flex-direction: ${props => props.vertical ? "column" : "row"};
`;

const Link = styled.a`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.color.primary.veryDarkBlue};
    line-height: 3.6rem;
`;

function Navigation(props) {
    return (
        <Container className={props.className} vertical={props.vertical}>
            <Link>Collections</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </Container>
    );
}

export default Navigation;