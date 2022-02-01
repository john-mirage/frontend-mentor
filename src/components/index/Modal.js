import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";
import BaseDialog from '@components/index/Dialog';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: opacity;
    background-color: rgba(0, 0, 0, 0.8);
`;

const Dialog = styled(motion(BaseDialog))`
    position: relative;
    z-index: 2;
    width: 70rem;
    margin-top: 10rem;
    margin-left: auto;
    margin-right: auto;
`;

function Modal({ title, description, imageSrc, imageAlt, link, closeModal }) {
    return createPortal(
        <Container>
            <Overlay
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
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
            />
        </Container>
        ,document.getElementById("screen")
    );
}

export default Modal;