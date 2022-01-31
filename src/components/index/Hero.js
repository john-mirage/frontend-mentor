import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 6rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    width: 50rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.gray};
`;

const Link = styled.a`
    display: inline;
    color: ${props => props.theme.color.primary.purple};

    &:hover {
        text-decoration: underline;
    }
`;

function Hero(props) {
    return (
        <Container className={props.className}>
            <Title>Frontend Mentor challenges</Title>
            <Description>
                All the challenges are made with <Link href="https://nextjs.org/">Next.js</Link> / <Link href="https://reactjs.org/">React</Link> and <Link href="https://styled-components.com/">Styled components</Link></Description>
        </Container>
    );
}

export default Hero;