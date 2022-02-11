import { useState } from 'react';
import styled, { css } from "styled-components";
import Slider from "@components/solution/ecommerce-product-page/slider";
import Thumbnail from "@components/solution/ecommerce-product-page/thumbnail";
import IconButton from '@components/solution/ecommerce-product-page/icon-button';
import BasePreviousIcon from "@assets/solution/ecommerce-product-page/icon-previous.svg?react";
import BaseNextIcon from "@assets/solution/ecommerce-product-page/icon-next.svg?react";

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Featured = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 100%;
    overflow: hidden;

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        border-radius: 2rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        cursor: pointer;
    }
`;

const Thumbnails = styled.ul`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        display: grid;
        grid-template-columns: repeat(${props => props.thumbnailNumber}, 1fr);
        gap: 3rem;
        margin-top: 3rem;
    }
`;

const ctrlButton = css`
    position: absolute;
    z-index: 20;
    top: 50%;
    width: 4rem;
    height: 4rem;
    transform: translateY(-50%);
    background-color: ${props => props.theme.color.neutral.white};

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        display: none;
    }
`;

const ctrlIcon = css`
    width: 1rem;
    height: auto;
    fill: none;
    stroke: ${props => props.theme.color.neutral.black};
`;

const PreviousButton = styled(IconButton)`
    ${ctrlButton}
    left: 2rem;
`;

const PreviousIcon = styled(BasePreviousIcon)`
    ${ctrlIcon}
`;

const NextButton = styled(IconButton)`
    ${ctrlButton}
    right: 2rem;
`;

const NextIcon = styled(BaseNextIcon)`
    ${ctrlIcon}
`;

function Gallery({ className, thumbnails, images, setLightboxImage, setLightboxIsOpen, scrollY }) {
    const [featuredImage, setFeaturedImage] = useState(1);

    function showPreviousImage(event) {
        event.preventDefault();
        setFeaturedImage(featuredImage <= 1 ? images.length : featuredImage - 1);
    }

    function showNextImage(event) {
        event.preventDefault();
        setFeaturedImage(featuredImage >= images.length ? 1 : featuredImage + 1);
    }

    function showPicture(imageIndex) {
        setFeaturedImage(imageIndex);
        setLightboxImage(imageIndex);
    }

    function openLightbox() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            setLightboxIsOpen(true);
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}`;
            body.style.left = '0px';
            body.style.width = '100%';
        }
    }

    return (
        <Container className={className}>

            <Featured onClick={openLightbox}>
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
                            action={() => showPicture(imageIndex)}
                            isActive={isActive}
                        />
                    );
                })}
            </Thumbnails>

        </Container>
    );
};

export default Gallery;