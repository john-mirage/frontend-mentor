import styled from "styled-components";
import RadioInput from "@components/chat-app-css-illustration/RadioInput";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    border-bottom-left-radius: 0.6rem;
    background: linear-gradient(to right, ${props => props.theme.gradientLightMagenta}, ${props => props.theme.gradientLightViolet});
    padding: 1.6rem;
`;

const Duration = styled.h3`
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
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
            <RadioInput inputId={props.inputId} />
            <Duration>{props.duration}</Duration>
            <Price>{props.price}</Price>
        </Container>
    );
}

export default Proposition;