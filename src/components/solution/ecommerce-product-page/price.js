import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
`;

const CurrentPrice = styled.p`
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
    margin-right: 1.6rem;
`;

const Discount = styled.p`
    padding: 0.4rem 1rem;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.color.primary.orange};
    background-color: ${props => props.theme.color.primary.paleOrange};
`;

const InitialPrice = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration-line: line-through;
    color: ${props => props.theme.color.neutral.grayishBlue};
    margin-left: auto;

    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        margin-top: 1rem;
        width: 100%;
    }
`;

function Price({ className }) {
    return (
        <Container className={className}>
            <CurrentPrice>$125.00</CurrentPrice>
            <Discount>50%</Discount>
            <InitialPrice>$250.00</InitialPrice>
        </Container>
    );
}

export default Price;