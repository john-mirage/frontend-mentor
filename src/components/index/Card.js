import styled from "styled-components";
import visibilityIcon from "@assets/index/visibility-icon.svg";
import infoIcon from "@assets/index/info-icon.svg";
import Link from "next/link";

const Container = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 0.5rem solid ${props => props.theme.color.primary.gray};
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (min-width: 1080px) {
        height: 19.2rem;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    transition-property: visibility, opacity;
    transition-duration: 300ms;
    background-color: rgba(88, 28, 135, 0.8);

    ${Container}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

const Button = styled.a`
    width: 100%;
    height: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3.6rem;

    &:hover,
    &:active {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const ModalButton = styled(Button)`
    display: block;
    background-image: url(${infoIcon.src});
    cursor: pointer;
`;

const LinkButton = styled(Button)`
    background-image: url(${visibilityIcon.src});
`;

function Card(props) {
    return (
        <Container>
            <Image
                src={props.image}
                alt={props.imageAlt}
            />
            <Overlay>
                <ModalButton as="label" htmlFor={props.modalTrigger} />
                <Link href={props.link}>
                    <LinkButton />
                </Link>
            </Overlay>
        </Container>
    );
}

export default Card;