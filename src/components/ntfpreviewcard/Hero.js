import Image from "next/image";
import styled from "styled-components";
import equilibrium from "@assets/nftpreviewcard/image-equilibrium.jpg";
import viewIcon from "@assets/nftpreviewcard/icon-view.svg";

const Container = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 0.8rem;
    overflow: hidden;
    margin-bottom: 2rem;

    &:hover .cd-Hero__overlay {
        display: flex;
    }
`;

const Overlay = styled.a`
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 247, 0.5);
`;

function Hero() {
    return (
        <Container>
            <Image
                src={equilibrium}
                alt="Equilibrium illustration"
                layout="responsive"
                priority
            />
            <Overlay className="cd-Hero__overlay">
                <Image
                    src={viewIcon}
                    alt="Eye icon illustration"
                    width="50"
                    height="50"
                />
            </Overlay>
        </Container>
    );
}

export default Hero;