import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color.primary.gray};
    border-radius: 2rem;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Body = styled.div`
    padding: 4rem;
    max-height: calc(100vh - 35.2rem);
    overflow-y: auto;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: ${props => props.theme.color.neutral.gray};
    margin-bottom: 6rem;
`;

const Button = styled.a`
    width: 100%;
    padding: 2rem 4rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    background-color: ${props => props.theme.color.primary.darkPurple};
    color: ${props => props.theme.color.neutral.white};
`;

function Modal(props) {
    return (
        <Container className={props.className}>
            <Image src={props.image} alt={props.imageAlt} />
            <Body>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <Link href={props.link}>
                    <Button>Show the challenge</Button>
                </Link>
            </Body>
        </Container>
    );
}

export default Modal;