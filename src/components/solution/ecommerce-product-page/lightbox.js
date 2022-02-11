import { forwardRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import BaseSlider from '@components/solution/ecommerce-product-page/slider';
import Thumbnail from "@components/solution/ecommerce-product-page/thumbnail";
import IconButton from "@components/solution/ecommerce-product-page/icon-button";
import BaseCloseIcon from "@assets/solution/ecommerce-product-page/icon-close.svg?react";
import BasePreviousIcon from "@assets/solution/ecommerce-product-page/icon-previous.svg?react";
import BaseNextIcon from "@assets/solution/ecommerce-product-page/icon-next.svg?react";

const Container = styled.div`
    width: 100%;
    height: auto;
    padding-top: 12rem;
    padding-bottom: 5rem;
`;

const Dialog = styled.div`
    position: relative;
    width: 70rem;
    height: auto;
    margin: auto;
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
    transition: fill 300ms;

    ${CloseButton}:hover & {
        fill: ${props => props.theme.color.primary.orange};
    }
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
    transition: stroke 300ms;
`;

const PreviousButton = styled(IconButton)`
    ${ctrlButton}
    left: 0;
    transform: translate(-50%, -50%);
`;

const PreviousIcon = styled(BasePreviousIcon)`
    ${ctrlIcon}

    ${PreviousButton}:hover & {
        stroke: ${props => props.theme.color.primary.orange};
    }
`;

const NextButton = styled(IconButton)`
    ${ctrlButton}
    right: 0;
    transform: translate(50%, -50%);
`;

const NextIcon = styled(BaseNextIcon)`
    ${ctrlIcon}

    ${NextButton}:hover & {
        stroke: ${props => props.theme.color.primary.orange};
    }
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

    function closeLightBox(event) {
        if (event) event.preventDefault();
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        setLightboxIsOpen(false);
    }

    function listenResize() {
        if (window.innerWidth < 976) closeLightBox();  
    }

    useEffect(() => {
        window.addEventListener('resize', listenResize);
        return function cleanUp() {
            window.removeEventListener('resize', listenResize);
        }
    }, []);

    return (
        <Container className={className} ref={ref}>
            <Dialog>
                <CloseButton action={closeLightBox}>
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
            </Dialog>
        </Container>
    );
});

export default Lightbox;