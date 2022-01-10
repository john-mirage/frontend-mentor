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
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Overlay = styled.a`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    background-color: ${props => props.theme.color.primary.transparentCyan};
    background-image: url(${viewIcon.src});
    background-repeat: no-repeat;
    background-position: center;
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
                src={equilibrium.src}
                alt="Equilibrium illustration"
            />
            <Overlay />
        </Container>
    );
}

export default Hero;