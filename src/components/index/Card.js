import Link from "next/link";
import styled from "styled-components";

const Container = styled.article`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 0.8rem;
    margin-bottom: 3.2rem;
    background-color: ${props => props.theme.white};
    box-shadow: 0 4px 16px ${props => props.theme.shadow};

    @media screen and (min-width: 808px) {
        display: flex;
        flex-direction: row;
        width: 76rem;
        margin-left: auto;
        margin-right: auto;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;

    @media screen and (min-width: 808px) {
        width: auto;
        height: 19.2rem;
    }
`;

const Body = styled.div`
    padding: 1.6rem;

    @media screen and (min-width: 808px) {
        padding: 2.4rem;
    }
`;

const Title = styled.a`
    display: block;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.primaryText};
    margin-bottom: 1.6rem;

    @media screen and (min-width: 808px) {
        text-align: start;
    }

    &:hover {
        color: ${props => props.theme.darkBlue};
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.secondaryText};
    line-height: 2.4rem;

    @media screen and (min-width: 580px) {
        width: 50rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 808px) {
        width: auto;
        margin-left: 0;
        margin-right: 0;
        text-align: start;
    }
`;

function Card(props) {
    return (
        <Container>
            <Image
                src={props.imageSrc}
                alt={props.imageAlt}
            />
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