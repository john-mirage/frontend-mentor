import styled, { css } from 'styled-components';
import BaseIconButton from '@components/solution/room-homepage/icon-button';
import Button from '@components/solution/room-homepage/button';
import Image1 from '@assets/solution/room-homepage/desktop-image-hero-1.jpg';
import BaseLeftArrowIcon from '@assets/solution/room-homepage/icon-angle-left.svg?react';
import BaseRightArrowIcon from '@assets/solution/room-homepage/icon-angle-right.svg?react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex-direction: row;
    }
`;

const ImageSection = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 100%;

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        padding-top: 56.25%;
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex: 0 0 60%;
        width: 60%;
        padding-top: 40%;
    }
`;

const TextSection = styled.div`
    width: 100%;
    height: auto;
    padding: 6rem 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex: 0 0 40%;
        display: flex;
        width: 40%;
        padding: 0 2rem;
    }
`;

const Slide = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.section`
    max-width: 43rem;
    margin: auto;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        width: 80%;
    }
`;

const Title = styled.h2`
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 3.2rem;
    color: ${props => props.theme.color.primary.black};
    margin-bottom: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.xl}) {
        font-size: 4rem;
        line-height: 4.8rem;
    }
`;

const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: ${props => props.theme.color.primary.darkGray};
    margin-bottom: 2rem;
`;

const Controller = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    width: 12rem;
    height: 6rem;
    background-color: ${props => props.theme.color.primary.black};

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        width: 10vw;
        height: 5vw;
        transform: translateX(100%);
    }
`;

const IconButton = styled(BaseIconButton)`
    width: 50%;
    height: 100%;
`;

const LeftIconButton = styled(IconButton)`left: 1rem;`;
const RightIconButton = styled(IconButton)`right: 1rem;`;

const arrow = css`
    width: 2rem;
    height: 2rem;
    stroke: ${props => props.theme.color.primary.white};
    fill: none;
`;

const LeftArrowIcon = styled(BaseLeftArrowIcon)`${arrow}`;
const RightArrowIcon = styled(BaseRightArrowIcon)`${arrow}`;

function Carousel({ className }) {
    return (
        <Container className={className}>
            <ImageSection>
                <Slide
                    src={Image1.src}
                    alt="image 1"
                />
                <Controller>
                    <LeftIconButton>
                        <LeftArrowIcon />
                    </LeftIconButton>
                    <RightIconButton>
                        <RightArrowIcon />
                    </RightIconButton>
                </Controller>
            </ImageSection>

            <TextSection>
                <Info>
                    <Title>Discover innovative ways to decorate</Title>
                    <Description>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</Description>
                    <Button />
                </Info>
            </TextSection>
        </Container>
    );
}

export default Carousel;