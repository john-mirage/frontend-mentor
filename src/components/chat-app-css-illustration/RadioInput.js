import styled from "styled-components";

const Container = styled.label`
    display: flex;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 0.2rem solid ${props => props.theme.color.secondary.veryLightMagenta};
    margin-right: 1.6rem;
    cursor: pointer;
`;

const Input = styled.input.attrs(props => {
    return {
        type: "radio",
        id: props.inputId,
        name: "proposition-selection",
        value: props.inputId
    };
})`
    display: none;
`;

const Dot = styled.div`
    display: block;
    transform: scale(0);
    width: 1rem;
    height: 1rem;
    margin: auto;
    border-radius: 50%;
    background-color: ${props => props.theme.color.secondary.white};
    border: 0.2rem solid transparent;
    transition-property: transform;
    transition-duration: 300ms;

    ${Input}:checked ~ & {
        transform: scale(1);
    }
`;

function RadioInput(props) {
    return (
        <Container className={props.className} htmlFor={props.inputId}>
            <Input inputId={props.inputId} />
            <Dot />
        </Container>
    );
}

export default RadioInput;