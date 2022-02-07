import styled from "styled-components";
import IconButton from "@components/icon-button";
import BaseLogo from "@assets/logo.svg?react";
import BaseGithubIcon from "@assets/icon-github.svg?react";
import Link from "next/link";

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

const HomeButton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
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

            <Link href="/" passHref>
                <HomeButton>
                    <Logo />
                    <Author>Chaosdynamix</Author>
                </HomeButton>
            </Link>

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