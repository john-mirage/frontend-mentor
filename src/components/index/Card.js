import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.article`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 0.8rem;
    margin-bottom: 3.2rem;
    background-color: ${props => props.theme.white};
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

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

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 25.6rem;
    border-bottom: 0.1rem solid ${props => props.theme.divider};

    @media screen and (min-width: 808px) {
        flex: 0 0 25.6rem;
        width: 25.6rem;
        min-height: 18rem;
        border-bottom: none;
        border-right: 0.1rem solid ${props => props.theme.divider};
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
            <ImageContainer>
                <Image
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </ImageContainer>
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