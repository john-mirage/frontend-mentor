import Image from "next/image";
import styled from "styled-components";
import clock from "@assets/nftpreviewcard/icon-clock.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: block;
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.8rem;
`;

const Amount = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    color: ${props => props.theme.softBlue};
    letter-spacing: 0.02rem;
`;

function Timer() {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={clock}
                    alt="Clock icon illustration"
                    width="17"
                    height="17"
                />
            </ImageContainer>
            <Amount>3 days left</Amount>
        </Container>
    );
}

export default Timer;