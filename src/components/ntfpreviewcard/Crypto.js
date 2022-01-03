import Image from "next/image";
import styled from "styled-components";
import ethereum from "@assets/nftpreviewcard/icon-ethereum.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: block;
    width: 1.1rem;
    height: 1.8rem;
    margin-right: 0.8rem;
`;

const Amount = styled.p`
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