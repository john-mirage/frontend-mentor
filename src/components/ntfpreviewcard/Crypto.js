import Image from "next/image";
import styled from "styled-components";
import ethereum from "@assets/nftpreviewcard/icon-ethereum.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 340px) {
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    display: block;
    width: 1.1rem;
    height: 1.8rem;
    margin-bottom: 0.4rem;

    @media screen and (min-width: 340px) {
        margin-bottom: 0;
        margin-right: 0.8rem;
    }
`;

const Amount = styled.p`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.cyan};
`;

function Crypto() {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={ethereum}
                    alt="Ethereum crypto currency icon"
                    width="11"
                    height="18"
                />
            </ImageContainer>
            <Amount>0.041 ETH</Amount>
        </Container>
    );
}

export default Crypto;