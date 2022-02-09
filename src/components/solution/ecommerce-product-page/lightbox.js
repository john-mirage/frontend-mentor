import { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import BaseSlider from '@components/solution/ecommerce-product-page/slider';
import Thumbnail from "@components/solution/ecommerce-product-page/thumbnail";
import IconButton from "@components/solution/ecommerce-product-page/icon-button";
import BaseCloseIcon from "@assets/solution/ecommerce-product-page/icon-close.svg?react";
import BasePreviousIcon from "@assets/solution/ecommerce-product-page/icon-previous.svg?react";
import BaseNextIcon from "@assets/solution/ecommerce-product-page/icon-next.svg?react";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const Featured = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 100%;
`;

const Slider = styled(BaseSlider)`
    border-radius: 2rem;
`;

const Thumbnails = styled.ul`
    display: grid;
    grid-template-columns: repeat(${props => props.thumbnailNumber}, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    padding-left: 6rem;
    padding-right: 6rem;
`;

const CloseButton = styled(IconButton)`
    position: absolute;
    top: -1rem;
    right: 0;
    transform: translateY(-100%);
    width: 6rem;
    height: 6rem;
    margin-right: -2rem;
`;

const CloseIcon = styled(BaseCloseIcon)`
    width: 2rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.white};
`;

const ctrlButton = css`
    position: absolute;
    z-index: 20;
    top: 50%;
    background-color: ${props => props.theme.color.neutral.white};
`;

const ctrlIcon = css`
    width: 1.2rem;
    height: auto;
    fill: none;
    stroke: ${props => props.theme.color.neutral.black};
`;

const PreviousButton = styled(IconButton)`
    ${ctrlButton}
    left: 0;
    transform: translate(-50%, -50%);
`;

const PreviousIcon = styled(BasePreviousIcon)`
    ${ctrlIcon}
`;

const NextButton = styled(IconButton)`
    ${ctrlButton}
    right: 0;
    transform: translate(50%, -50%);
`;

const NextIcon = styled(BaseNextIcon)`
    ${ctrlIcon}
`;

const Lightbox = forwardRef(({ className, thumbnails, images, initialFeaturedImage, setLightboxIsOpen }, ref) => {
    const [featuredImage, setFeaturedImage] = useState(initialFeaturedImage);

    function showPreviousImage(event) {
        event.preventDefault();
        setFeaturedImage(featuredImage <= 1 ? images.length : featuredImage - 1);
    }

    function showNextImage(event) {
        event.preventDefault();
        setFeaturedImage(featuredImage >= images.length ? 1 : featuredImage + 1);
    }

    return (
        <Container className={className} ref={ref}>

            <CloseButton action={() => setLightboxIsOpen(false)}>
                <CloseIcon />
            </CloseButton>

            <Featured>
                <Slider images={images} currentImage={featuredImage} >
                    <PreviousButton action={showPreviousImage}>
                        <PreviousIcon />
                    </PreviousButton>
                    <NextButton action={showNextImage}>
                        <NextIcon />
                    </NextButton>
                </Slider>
            </Featured>

            <Thumbnails thumbnailNumber={thumbnails.length}>
                {thumbnails.map((thumbnail, index) => {
                    const imageIndex = index + 1;
                    const isActive = featuredImage === imageIndex;
                    return (
                        <Thumbnail
                            key={index}
                            thumbnail={thumbnail}
                            action={() => setFeaturedImage(imageIndex)}
                            isActive={isActive}
                        />
                    );
                })}
            </Thumbnails>

        </Container>
    );
});

export default Lightbox;