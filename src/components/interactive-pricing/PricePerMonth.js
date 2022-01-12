import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;

    @media screen and (min-width: 375px) {
        flex-direction: row;
    }
`;

const Price = styled.h3`
    margin-right: 1rem;
    font-size: 4rem;
    font-weight: 800;
    color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
`;

const Type = styled.p`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

function PricePerMonth(props) {
    const formatedPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.price);
    return (
        <Container className={props.className}>
            <Price>{formatedPrice}</Price>
            <Type>/ {props.plan}</Type>
        </Container>
    );
}

export default PricePerMonth;