import styled from "styled-components";
import BaseEthereumIcon from "@assets/solution/nft-preview-card/icon-ethereum.svg?react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 340px) {
        flex-direction: row;
    }
`;

const EthereumIcon = styled(BaseEthereumIcon)`
    width: 1.1rem;
    height: auto;
    margin-bottom: 0.4rem;
    fill: ${props => props.theme.color.primary.cyan};

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
            <EthereumIcon />
            <Price>0.041 ETH</Price>
        </Container>
    );
}

export default Crypto;