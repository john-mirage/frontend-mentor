import styled from "styled-components";
import Modal from "@components/index/Modal";
import viewIcon from "@assets/index/icon-view.svg";

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

const Card = styled.label`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 0.5rem solid ${props => props.theme.color.primary.gray};
    overflow: hidden;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (min-width: 1080px) {
        height: 19.2rem;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    transition-property: visibility, opacity;
    transition-duration: 300ms;
    background-color: rgba(88, 28, 135, 0.8);
    background-image: url(${viewIcon.src});
    background-repeat: no-repeat;
    background-position: center;

    ${Container}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

const StyledModal = styled(Modal)`
    display: none;
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 4rem);

    ${Input}:checked ~ & {
        display: block;
    }

    @media screen and (min-width: 580px) {
        width: 50rem;
    }
`;

const Scrim = styled.label`
    display: none;
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;

    ${Input}:checked ~ & {
        display: block;
    }
`;

function Challenge(props) {
    return (
        <Container>
            <Input inputId={props.inputId} />
            <Card htmlFor={props.inputId}>
                <Image
                    src={props.image}
                    alt={props.imageAlt}
                />
                <Overlay />
            </Card>
            <StyledModal
                title={props.title}
                description={props.description}
                link={props.link}
                image={props.image}
                imageAlt={props.imageAlt}
            />
            <Scrim htmlFor={props.inputId} />
        </Container>
    );
}

export default Challenge;