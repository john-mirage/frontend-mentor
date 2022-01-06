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

const RadioButton = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 0.2rem solid ${props => props.theme.secondaryVeryLightMagenta};
    margin-right: 1.6rem;
`;

const Duration = styled.h3`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.secondaryLightGrayishViolet};
`;

const Price = styled.p`
    margin-left: auto;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.secondaryWhite};
`;

function Proposition(props) {
    return (
        <Container>
            <RadioButton />
            <Duration>{props.duration}</Duration>
            <Price>{props.price}</Price>
        </Container>
    );
}

export default Proposition;