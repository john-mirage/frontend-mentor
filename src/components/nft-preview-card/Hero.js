import Image from "next/image";
import styled from "styled-components";
import equilibrium from "@assets/nft-preview-card/image-equilibrium.jpg";
import viewIcon from "@assets/nft-preview-card/icon-view.svg";

const Container = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 0.8rem;
    overflow: hidden;
    margin-bottom: 2rem;
`;

const Overlay = styled.a`
    display: flex;
    visibility: hidden;
    opacity: 0;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 247, 0.5);
    transition-property: visibility, opacity;
    transition-duration: 300ms;

    ${Container}:hover & {
        visibility: visible;
        opacity: 1;
    }
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
            <Overlay>
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