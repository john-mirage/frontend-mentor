import styled from "styled-components";

const Container = styled.label`
    display: flex;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 0.2rem solid ${props => props.theme.secondaryVeryLightMagenta};
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
    display: none;
    width: 1rem;
    height: 1rem;
    margin: auto;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryWhite};
    border: 0.2rem solid transparent;

    ${Input}:checked ~ & {
        display: block;
    }
`;

function RadioInput(props) {
    return (
        <Container htmlFor={props.inputId}>
            <Input inputId={props.inputId} />
            <Dot />
        </Container>
    );
}

export default RadioInput;