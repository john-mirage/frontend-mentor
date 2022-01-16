import styled from "styled-components";
import CloseButton from "@components/index/CloseButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color.primary.gray};
    overflow: hidden;
`;

const Body = styled.div`
    flex: 1 1 100%;
    overflow-y: auto;
`;

const Footer = styled.footer`
    flex: 0 0 6rem;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-left: 3rem;
    padding-right: 1.8rem;
    border-top: 0.1rem solid ${props => props.theme.color.primary.divider};

    @media screen and (min-width: 580px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: ${props => props.theme.color.neutral.gray};
    padding-left: 3rem;
    padding-right: 3rem;
`;

function Modal(props) {
    return (
        <Container className={props.className}>
            <Body>
                <Image src={props.image} alt={props.imageAlt} />
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Body>

            <Footer>
                <CloseButton label="Close" inputId={props.modalTrigger} />
            </Footer>
        </Container>
    );
}

export default Modal;