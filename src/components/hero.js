import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        font-size: 6rem;
    }
`;

const Description = styled.p`
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.gray};

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        width: 50rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 2rem;
        line-height: 3rem;
    }
`;

const Link = styled.a`
    display: inline;
    color: ${props => props.theme.color.primary.purple};

    &:hover {
        text-decoration: underline;
    }
`;

function Hero({ className, title, description }) {
    return (
        <Container className={className}>
            <Title>{title}</Title>
            {description && (
                <Description>All the challenges are made with <Link href="https://nextjs.org/">Next.js</Link> / <Link href="https://reactjs.org/">React</Link> and <Link href="https://styled-components.com/">Styled components</Link></Description>
            )}
        </Container>
    );
}

export default Hero;