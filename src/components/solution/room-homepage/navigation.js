import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Link = styled.a`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.primary.white};
    margin-right: 3rem;
    
    &:last-child {
        margin-right: 0;
    }
`;

const menuItems = ['home', 'shop', 'about', 'contact'];

function Navigation({ className }) {
    return (
        <Container className={className}>
            {menuItems.map((menuItem) => (
                <Link>{menuItem}</Link>
            ))}
        </Container>
    );
}

export default Navigation;