import styled from "styled-components";
import BaseRadioInput from "@components/chat-app-css-illustration/RadioInput";

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
    background: ${props => props.theme.color.primary.gradient.magentaToVioletHorizontal};
    padding: 1.6rem;
`;

const RadioInput = styled(BaseRadioInput)`
    flex-grow: 0;
    flex-shrink: 0;
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
    color: ${props => props.theme.color.secondary.white};
`;

function Proposition(props) {
    return (
        <Container className={props.className}>
            <RadioInput inputId={props.inputId} />
            <Duration>{props.duration}</Duration>
            <Price>{props.price}</Price>
        </Container>
    );
}

export default Proposition;