import styled, { css } from 'styled-components';
import BaseIconButton from '@components/solution/todo-app-hub/icon-button';
import BaseMoonIcon from '@assets/solution/todo-app-hub/icon-moon.svg?react';
import BaseSunIcon from '@assets/solution/todo-app-hub/icon-sun.svg?react';

const Container = styled.header`
    display: flex;
    width: 100%;
    height: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: auto;
`;

const Brand = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: ${props => props.theme.neutral.topAppBar};
`;

const ThemeButton = styled(BaseIconButton)`
    margin-right: -1.4rem;
`;

const icon = css`
    width: 2rem;
    height: auto;
    fill: ${props => props.theme.neutral.topAppBar};
`;

const MoonIcon = styled(BaseMoonIcon)`
    ${icon}
`;

const SunIcon = styled(BaseSunIcon)`
    ${icon}
`;

function TopAppBar({ className, isDarkTheme, setIsDarkTheme }) {
    return (
        <Container className={className}>
            <Inner>
                <Brand>todo</Brand>
                <ThemeButton action={() => setIsDarkTheme(!isDarkTheme)}>
                    {isDarkTheme
                        ? <SunIcon />
                        : <MoonIcon />
                    }
                </ThemeButton>
            </Inner>
        </Container>
    );
}

export default TopAppBar;