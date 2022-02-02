import styled from "styled-components";
import IconButton from "@components/index/IconButton";
import BaseLogo from "@assets/index/logo.svg?react";
import BaseGithubIcon from "@assets/index/icon-github.svg?react";

const Container = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 8rem;
`;

const Author = styled.p`
    font-family: "Expletus Sans", cursive;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.color.neutral.gray};

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        font-size: 2rem;
    }
`;

const Logo = styled(BaseLogo)`
    width: 3rem;
    height: auto;
    margin-right: 1rem;
    fill: ${props => props.theme.color.neutral.white};

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        width: 4rem;
    }
`;

const GithubButton = styled(IconButton)`
    margin-left: auto;
    margin-right: -1.2rem;
`;

const GithubIcon = styled(BaseGithubIcon)`
    width: 2.4rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.white};
`;

function TopAppBar(props) {
    return (
        <Container className={props.className}>
            <Logo />
            <Author>Chaosdynamix</Author>
            <GithubButton
                forwardedAs="a"
                href="https://github.com/ChaosDynamix/frontend-mentor"
            >
                <GithubIcon />
            </GithubButton>
        </Container>
    );
}

export default TopAppBar;