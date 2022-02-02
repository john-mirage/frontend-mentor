import styled from 'styled-components';
import BaseIconButton from '@components/room-homepage/IconButton';
import BaseMenuIcon from '@assets/room-homepage/icon-hamburger.svg?react';
import BaseLogo from '@assets/room-homepage/logo.svg?react';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
`;

const LeftSection = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
`;

const RightSection = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
`;

const MenuButton = styled(BaseIconButton)`
    margin-left: 1rem;
`;

const MenuIcon = styled(BaseMenuIcon)`
    width: 2rem;
    height: auto;
    fill: ${props => props.theme.color.primary.white};
`;

const Logo = styled(BaseLogo)`
    margin-left: auto;
    margin-right: auto;
    width: 6rem;
    height: auto;
    fill: ${props => props.theme.color.primary.white};
`;

function TopAppBar({ className }) {
    return (
        <Container className={className}>
            <LeftSection>
                <MenuButton>
                    <MenuIcon />
                </MenuButton>
            </LeftSection>

            <RightSection>
                <Logo />
            </RightSection>
        </Container>
    );
}

export default TopAppBar;