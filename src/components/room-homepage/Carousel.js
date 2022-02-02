import styled, { css } from 'styled-components';
import IconButton from '@components/room-homepage/IconButton';
import Button from '@components/room-homepage/Button';
import Image1 from '@assets/room-homepage/desktop-image-hero-1.jpg';
import BaseLeftArrowIcon from '@assets/room-homepage/icon-angle-left.svg?react';
import BaseRightArrowIcon from '@assets/room-homepage/icon-angle-right.svg?react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Picture = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 100%;
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
`;

const Controller = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 4.8rem;
    background-color: ${props => props.theme.color.primary.black};
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