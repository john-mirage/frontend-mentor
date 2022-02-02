import styled from 'styled-components';
import DarkImage from '@assets/room-homepage/image-about-dark.jpg';
import LightImage from '@assets/room-homepage/image-about-light.jpg';

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const ImageSection = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const TextSection = styled.section`
    width: 100%;
    height: auto;
    padding: 6rem 2rem;
`;

const Title = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.color.primary.veryDarkGray};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: ${props => props.theme.color.primary.darkGray};
`;

function About({ className }) {
    return (
        <Container className={className}>
            <ImageSection>
                <Image src={DarkImage.src} />
            </ImageSection>

            <TextSection>
                <Title>about our furniture</Title>
                <Description>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</Description>
            </TextSection>

            <ImageSection>
                <Image src={LightImage.src} />
            </ImageSection>
        </Container>
    );
}

export default About;