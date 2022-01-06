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

const Input = styled.input`
    display: none;

    &:checked ~ .cd-Proposition-RadioButtonIndicator {
        display: block;
    }
`;

const Dot = styled.div`
    display: none;
    width: 1rem;
    height: 1rem;
    margin: auto;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryWhite};
    border: 0.2rem solid transparent;
`;

function RadioInput(props) {
    return (
        <Container htmlFor={props.inputId}>
            <Input type="radio" id={props.inputId} name="proposition-selection" value={props.inputId} />
            <Dot className="cd-Proposition-RadioButtonIndicator" />
        </Container>
    );
}

export default RadioInput;