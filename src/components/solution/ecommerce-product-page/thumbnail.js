import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const overlayOnHover = {
    hover: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.3,
        },
    },
};

const Container = styled(motion.li)`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 100%;
    cursor: pointer;
`;

const layer = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Background = styled(motion.div)`
    ${layer}
    z-index: 50;
    background-color: ${props => props.theme.color.primary.orange};
    border-radius: 1.2rem;
`;

const Image = styled.img`
    ${layer}
    z-index: 60;
    object-fit: cover;
    border-radius: 1rem;
`;

const Overlay = styled(motion.div)`
    ${layer}
    z-index: 70;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
`;

function Thumbnail({ className, thumbnail, action, isActive }) {
    return (
        <Container
            className={className}
            onClick={action}
            whileHover="hover"
        >
            <Background
                initial={false}
                animate={{ scale: isActive ? 1.05 : 0.8 }}
                transition={{ type: 'spring', duration: 0.3 }}
            />
            <Image
                src={thumbnail.src}
                alt={thumbnail.alt}
            />
            <Overlay
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ type: 'spring', duration: 0.3 }}
                variants={overlayOnHover}
            />
        </Container>
    );
}

export default Thumbnail;