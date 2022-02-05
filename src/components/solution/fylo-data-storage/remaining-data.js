import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14rem;
    height: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 1rem;
    background-color: #fff;

    @media screen and (min-width: 320px) {
        flex-direction: row;
        width: 20rem;
        padding-left: 3rem;
        padding-right: 3rem;
    }

    @media screen and (min-width: 1280px) {
        position: relative;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 0;
    }
`;

const DataAmount = styled.p`
    flex: 0 0 auto;
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const DataType = styled.p`
    flex: 0 0 auto;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 0.4rem;
    color: ${props => props.theme.color.neutral.grayishBlue};

    @media screen and (min-width: 320px) {
        margin-top: 0;
        margin-left: 1rem;
    }
`;

const Triangle = styled.div`
    display: none;

    @media screen and (min-width: 1280px) {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        transform: translateY(50%);
        border-top: 2.5rem solid transparent;
        border-bottom: 2.5rem solid transparent;
        border-right: 2.5rem solid #fff;
    }
`;

function RemainingData(props) {
    return (
        <Container className={props.className}>
            <DataAmount>185</DataAmount>
            <DataType>gb left</DataType>
            <Triangle />
        </Container>
    );
}

export default RemainingData;