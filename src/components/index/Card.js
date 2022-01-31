import useScrollConstraints from "@utils/use-scroll-constraints";
import useWheelScroll from "@utils/use-wheel-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";

const dismissDistance = 150;

const Container = styled.li`
    position: relative;
    flex: 1 0 100%;
    max-width: 100%;
    height: 46rem;
    padding: 2rem 0;

    @media screen and (min-width: 600px) {
        flex: 0 0 50%;
        max-width: 50%;
        padding: 2rem;

        &:nth-child(odd) { padding-left: 0; }
        &:nth-child(even) { padding-right: 0; }
    }
`;

const Overlay = styled(motion.div)`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: opacity;
    background-color: rgba(0, 0, 0, 0.8);
`;

const Inner = styled.div`
    position: ${props => props.isActive ? "fixed" : "relative"};
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;

    ${props => props.isActive && `
        z-index: 1;
        top: 0;
        left: 0;
        overflow: hidden;
        padding: 0;

        @media screen and (min-width: 600px) {
            padding: 4rem 0;
        }
    `}
`;

const Content = styled(motion.div)`
    width: 100%;
    height: 42rem;
    margin: 0 auto;
    overflow: hidden;
    background-color: ${props => props.theme.color.neutral.darkGray};
    border-radius: 1rem;
    pointer-events: auto;

    ${props => props.isActive && `
        max-width: 70rem;
        height: auto;
    `}
`;

const Image = styled(motion.img)`
    width: 100%;
    height: 44rem;
    object-fit: cover;
`;

const Description = styled(motion.p)`
    height: 40rem;
    padding: 2rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.gray};
`;

const Trigger = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Card = memo(({
    isActive,
    setActiveCard,
    id,
    title,
    description,
    link,
    imageSrc,
    imageAlt
}) => {


    return (
        <Container>
            <AnimatePresence>
                {isActive && (
                    <Overlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity:0 }}
                        onClick={() => setActiveCard(false)}
                    />
                )}
            </AnimatePresence>

            <Inner isActive={isActive}>
                <Content isActive={isActive}>
                    <Image src={imageSrc} alt={imageAlt}/>
                    <Description>{description}</Description>
                </Content>
            </Inner>

            {!isActive && (
                <Trigger onClick={() => setActiveCard(id)} />
            )}
        </Container>
    );
},
(previous, next) => previous.isActive === next.isActive
);

export default Card;