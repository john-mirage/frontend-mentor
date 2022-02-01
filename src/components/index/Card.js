import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@components/index/Modal";
import BaseDialog from '@components/index/Dialog';

const Container = styled(motion.li)`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

function Card({
    isActive,
    setActiveCard,
    id,
    title,
    description,
    link,
    imageSrc,
    imageAlt,
    pointOfInterest,
    screenRef
}) {
    return (
        <>
            <Container
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveCard(id)}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                />
            </Container>
            <AnimatePresence>
                {isActive && (
                    <Modal>
                        <Overlay
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setActiveCard(false)}
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
                    </Modal>
                )}
            </AnimatePresence>
        </>
    );
}

export default Card;