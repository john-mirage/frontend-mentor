import styled from 'styled-components';
import BaseNavigation from '@components/solution/room-homepage/navigation';
import BaseIconButton from '@components/solution/room-homepage/icon-button';
import BaseMenuIcon from '@assets/solution/room-homepage/icon-hamburger.svg?react';
import BaseLogo from '@assets/solution/room-homepage/logo.svg?react';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
`;

const LeftSection = styled.div`
    flex: 0 0 25%;
    width: 25%;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex: 0 0 auto;
        width: auto;
    }
`;

const RightSection = styled.div`
    flex: 0 0 50%;
    width: 50%;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex: 0 0 auto;
        width: auto;
    }
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

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        margin-left: 4rem;
    }
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