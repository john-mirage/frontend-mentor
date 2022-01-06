import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
    height: auto;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    border-bottom-left-radius: 0.6rem;
    background: linear-gradient(to right, ${props => props.theme.gradientLightMagenta}, ${props => props.theme.gradientLightViolet});
    padding: 1.6rem;
    margin-bottom: 1.6rem;
`;

const RadioButton = styled.label`
    display: flex;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 0.2rem solid ${props => props.theme.secondaryVeryLightMagenta};
    margin-right: 1.6rem;
    cursor: pointer;
`;

const RadioButtonInput = styled.input`
    display: none;

    &:checked ~ .cd-Proposition-RadioButtonIndicator {
        display: block;
    }
`;

const RadioButtonIndicator = styled.div`
    display: none;
    width: 1rem;
    height: 1rem;
    margin: auto;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryWhite};
    border: 0.2rem solid transparent;
`;

const Duration = styled.h3`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.secondaryLightGrayishViolet};
`;

const Price = styled.p`
    margin-left: auto;
    margin-right: 1rem;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.secondaryWhite};
`;

function Proposition(props) {
    return (
        <Container>
            <RadioButton htmlFor={props.inputId}>
                <RadioButtonInput type="radio" id={props.inputId} name="proposition-selection" value={props.inputId} />
                <RadioButtonIndicator className="cd-Proposition-RadioButtonIndicator" />
            </RadioButton>
            <Duration>{props.duration}</Duration>
            <Price>{props.price}</Price>
        </Container>
    );
}

export default Proposition;