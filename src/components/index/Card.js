import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@components/index/Modal";


const Container = styled(motion.li)`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
`;

const Image = styled(motion.img)`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
}) {
    return (
        <>
            <Container
                whileHover={{ scale: 1.06, z: 0 }}
                onClick={() => setActiveCard(id)}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                />
            </Container>
            <AnimatePresence>
                {isActive && (
                    <Modal
                        title={title}
                        description={description}
                        link={link}
                        imageSrc={imageSrc}
                        imageAlt={imageAlt}
                        closeModal={() => setActiveCard(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default Card;