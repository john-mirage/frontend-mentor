import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { motion, useDomEvent } from "framer-motion";
import BaseDialog from '@components/dialog';
import { useRef } from 'react';

const Container = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: opacity;
    background-color: rgba(0, 0, 0, 0.8);
`;

const Dialog = styled(motion(BaseDialog))`
    position: relative;
    z-index: 20;
    width: 100%;
    height: 100%;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        width: 70rem;
        height: auto;
        margin-top: 10rem;
        margin-left: auto;
        margin-right: auto;
        border-radius: 2rem;
    }
`;

function Modal({ title, description, imageSrc, imageAlt, link, closeModal }) {
    const containerRef = useRef(null);

    function handleScroll(event) {
        event.preventDefault();
    }

    useDomEvent(containerRef, "wheel", handleScroll, { passive: false });

    return createPortal(
        <Container ref={containerRef}>
            <Overlay
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                onClick={closeModal}
            />
            <Dialog
                key="challenge"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.3 }}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                title={title}
                description={description}
                link={link}
                closeModal={closeModal}
            />
        </Container>
        ,document.getElementById("screen")
    );
}

export default Modal;