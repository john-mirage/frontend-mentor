import styled from "styled-components";
import minusButton from "@assets/ecommerce-product-page/icon-minus.svg";
import plusButton from "@assets/ecommerce-product-page/icon-plus.svg";

const Container = styled.div`
    width: 100%;
    height: 6rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.neutral.lightGrayishBlue};
    padding-left: 0.4rem;
    padding-right: 0.4rem;
`;

const IconButton = styled.button`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.2rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const MinusButton = styled(IconButton)`
    background-image: url(${minusButton.src});
`;

const PlusButton = styled(IconButton)`
    background-image: url(${plusButton.src});
`;

const Count = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

function CountInput(props) {
    console.log(minusButton);
    return (
        <Container className={props.className}>
            <MinusButton />
            <Count>0</Count>
            <PlusButton />
        </Container>
    );
}

export default CountInput;