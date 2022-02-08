import styled, { css } from 'styled-components';
import IconButton from '@components/solution/room-homepage/icon-button';
import Button from '@components/solution/room-homepage/button';
import Image1 from '@assets/solution/room-homepage/desktop-image-hero-1.jpg';
import BaseLeftArrowIcon from '@assets/solution/room-homepage/icon-angle-left.svg?react';
import BaseRightArrowIcon from '@assets/solution/room-homepage/icon-angle-right.svg?react';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex-direction: row;
    }
`;

const Picture = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 100%;

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        padding-top: 56.25%;
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex: 1 1 50%;
        width: 50%;
        padding-top: 0;
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
    width: 100%;
    height: auto;
    padding: 6rem 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        flex: 1 1 50%;
        width: 50%;
        padding: 10rem 5rem;
    }
`;

const Title = styled.h2`
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 3.2rem;
    color: ${props => props.theme.color.primary.black};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: ${props => props.theme.color.primary.darkGray};
    margin-bottom: 4rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        width: 54rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        width: auto;
    }
`;

const Controller = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 11.6rem;
    height: 6rem;
    background-color: ${props => props.theme.color.primary.black};

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        width: 14rem;
        height: 8rem;
        transform: translateX(100%);
    }
`;

const arrow = css`
    width: 1rem;
    height: auto;
    stroke: ${props => props.theme.color.primary.white};
    fill: none;
`;

const LeftArrowIcon = styled(BaseLeftArrowIcon)`${arrow}`;
const RightArrowIcon = styled(BaseRightArrowIcon)`${arrow}`;

function Carousel({ className }) {
    return (
        <Container className={className}>
            <Picture>
                <Slide
                    src={Image1.src}
                    alt="image 1"
                />
                <Controller>
                    <IconButton>
                        <LeftArrowIcon />
                    </IconButton>
                    <IconButton>
                        <RightArrowIcon />
                    </IconButton>
                </Controller>
            </Picture>

            <Info>
                <Title>Discover innovative ways to decorate</Title>
                <Description>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</Description>
                <Button />
            </Info>
        </Container>
    );
}

export default Carousel;