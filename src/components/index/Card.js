import Link from "next/link";
import styled from "styled-components";

const Container = styled.article`
    width: 100%;
    height: auto;
    padding: 3rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${props => props.theme.color.primary.gray};

    @media screen and (min-width: 800px) {
        display: flex;
        flex-direction: row;
        height: 20rem;
        padding: 0;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.6rem;

    @media screen and (min-width: 800px) {
        flex: 0 0 28rem;
        width: 28rem;
        height: 100%;
        border-radius: 0;
    }
`;

const Body = styled.div`
    padding-top: 2rem;
    width: 100%;
    height: auto;
    text-align: center;

    @media screen and (min-width: 800px) {
        width: auto;
        padding: 2rem 4rem;
        text-align: start;
    }
`;

const Title = styled.a`
    display: block;
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 1.6rem;
    transition: color 300ms;

    &:hover {
        color: ${props => props.theme.color.primary.purple};
    }
`;

const Description = styled.p`
    width: auto;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.gray};
`;

function Card(props) {
    return (
        <Container className={props.className}>
            <Image src={props.imageSrc.src} alt={props.imageAlt} />
            <Body>
                <Link href={props.link}>
                    <Title>{props.title}</Title>
                </Link>
                <Description>{props.description}</Description>
            </Body>
        </Container>
    );
}

export default Card;