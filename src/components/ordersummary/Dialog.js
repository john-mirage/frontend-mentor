import styled from "styled-components";

const Container = styled.article`
    width: 100%;
    height: auto;
    border-radius: 2rem;
    box-shadow: 0px 4px 24px ${props => props.theme.desaturatedBlue};
    overflow: hidden;
    background-color: #FFF;

    @media screen and (min-width: 550px) {
        width: 50rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const Body = styled.div`
    padding: 3rem;

    @media screen and (min-width: 550px) {
        padding: 5rem;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 900;
    margin: 0;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.primaryText};

    @media screen and (min-width: 550px) {
        font-size: 3rem;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
    padding-bottom: 2rem;
    letter-spacing: 0.04rem;
    color: ${props => props.theme.secondaryText};
    line-height: 2.4rem;

    @media screen and (min-width: 384px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const Action = styled.a`
    display: block;
    width: 100%;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    text-align: center;
    cursor: pointer;
    padding: 1.5rem;
`;

const PrimaryAction = styled(Action)`
    background-color: ${props => props.theme.brightBlue};
    color: #FFF;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    box-shadow: 0px 4px 16px ${props => props.theme.desaturatedBlue};

    &:hover {
        opacity: 75%;
    }
`;

const SecondaryAction = styled(Action)`
    color: #6b7280;
    font-weight: 900;

    &:hover {
        color: #111827;
    }
`;

function Dialog(props) {
    return (
        <Container>

            <Image
                src={props.imageSrc}
                alt={props.imageAlt}
            />

            <Body>

                <Title>
                    {props.title}
                </Title>

                <Description>
                    {props.description}
                </Description>

                {props.children}

                <PrimaryAction>
                    {props.primaryAction}
                </PrimaryAction>

                <SecondaryAction>
                    {props.secondaryAction}
                </SecondaryAction>

            </Body>

        </Container>
    );
}

export default Dialog;