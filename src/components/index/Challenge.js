import styled from "styled-components";
import Card from "@components/index/Card";
import Modal from "@components/index/Modal";

const Container = styled.div`
    width: auto;
    height: auto;
`;

const Input = styled.input.attrs((props) => {
    return {
        type: "checkbox",
        id: props.inputId,
        name: props.inputId
    };
})`
    display: none;
`;

const StyledModal = styled(Modal)`
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${Input}:checked ~ & {
        display: flex;
    }

    @media screen and (min-width: 580px) {
        width: 50rem;
    }
`;

const Scrim = styled.label`
    display: none;

    @media screen and (min-width: 580px) {
        display: none;
        position: fixed;
        z-index: 90;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;

        ${Input}:checked ~ & {
            display: block;
        }
    }
`;

function Challenge(props) {
    return (
        <Container>
            <Input inputId={props.inputId} />
            <Card
                link={props.link}
                image={props.image}
                imageAlt={props.imageAlt}
                modalTrigger={props.inputId}
            />
            <StyledModal
                title={props.title}
                description={props.description}
                link={props.link}
                image={props.image}
                imageAlt={props.imageAlt}
                modalTrigger={props.inputId}
            />
            <Scrim htmlFor={props.inputId} />
        </Container>
    );
}

export default Challenge;