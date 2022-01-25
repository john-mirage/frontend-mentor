import styled from "styled-components";
import ethereum from "@assets/nft-preview-card/icon-ethereum.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 340px) {
        flex-direction: row;
    }
`;

const Icon = styled.img`
    display: block;
    width: 1.1rem;
    height: 1.8rem;
    margin-bottom: 0.4rem;

    @media screen and (min-width: 340px) {
        margin-bottom: 0;
        margin-right: 0.8rem;
    }
`;

const Price = styled.p`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.color.primary.cyan};
`;

function Crypto() {
    return (
        <Container>
            <Icon
                src={ethereum}
                alt="Ethereum crypto currency icon"
            />
            <Price>0.041 ETH</Price>
        </Container>
    );
}

export default Crypto;