import styled from "styled-components";
import React, { useState } from "react";
import Thumbnail from "@components/solution/ecommerce-product-page/thumbnail";
import productImage1 from "@assets/solution/ecommerce-product-page/image-product-1.jpg";
import productImage2 from "@assets/solution/ecommerce-product-page/image-product-2.jpg";
import productImage3 from "@assets/solution/ecommerce-product-page/image-product-3.jpg";
import productImage4 from "@assets/solution/ecommerce-product-page/image-product-4.jpg";
import productImageThumbnail1 from "@assets/solution/ecommerce-product-page/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "@assets/solution/ecommerce-product-page/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "@assets/solution/ecommerce-product-page/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "@assets/solution/ecommerce-product-page/image-product-4-thumbnail.jpg";
import previousIcon from "@assets/solution/ecommerce-product-page/icon-previous.svg";
import nextIcon from "@assets/solution/ecommerce-product-page/icon-next.svg";
import BaseCloseIcon from "@assets/solution/ecommerce-product-page/icon-close.svg?react";

const pictures = [
    {
        normal: productImage1.src,
        thumbnail: productImageThumbnail1.src,
    },
    {
        normal: productImage2.src,
        thumbnail: productImageThumbnail2.src,
    },
    {
        normal: productImage3.src,
        thumbnail: productImageThumbnail3.src,
    },
    {
        normal: productImage4.src,
        thumbnail: productImageThumbnail4.src,
    }
];

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Display = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const View = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;

    @media screen and (min-width: 576px) {
        border-radius: 2rem;
    }
`;

const Slider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: ${props => (props.numberOfPictures * 100)}%;
    height: auto;
    transform: translateX(-${props => (100 / props.numberOfPictures) * (props.currentSlide - 1)}%);
    transition: transform 300ms;
`;

const Slide = styled.img`
    width: ${props => (100 / props.numberOfPictures)}%;
    height: auto;
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 1.4rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    &:hover {
        background-color: ${props => props.theme.color.primary.paleOrange};
    }

    @media screen and (min-width: 576px) {
        ${props => !props.lightbox && "display: none;"}
    }
`;

const PreviousButton = styled(Button)`
    left: 2.4rem;
    background-image: url(${previousIcon});

    @media screen and (min-width: 576px) {
        ${props => props.lightbox && `
            left: -2rem;
        `}
    }
`;

const NextButton = styled(Button)`
    right: 2.4rem;
    background-image: url(${nextIcon});

    @media screen and (min-width: 576px) {
        ${props => props.lightbox && `
            right: -2rem;
        `}
    }
`;

const CloseButton = styled.button`
    display: flex;
    width: 5.6rem;
    height: 5.6rem;
    margin-left: auto;
    margin-right: -1.6rem;
    margin-bottom: 1rem;
    border-radius: 50%;
`;

const CloseIcon = styled(BaseCloseIcon)`
    width: 2.4rem;
    height: auto;
    margin: auto;
    fill: ${props => props.theme.color.neutral.white};
    transition: fill 300ms;

    ${CloseButton}:hover & {
        fill: ${props => props.theme.color.primary.orange};
    }
`;

const Thumbnails = styled.div`
    display: none;

    @media screen and (min-width: 576px) {
        display: grid;
        grid-template-columns: repeat(${props => props.numberOfPictures}, 1fr);
        gap: 3rem;
        margin-top: 4rem;
        ${props => props.lightbox && `
            padding-left: 4rem;
            padding-right: 4rem;
        `}
    }
`;

const Gallery = React.forwardRef(({ className, lightbox, setLightboxIsOpen }, ref) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    function showPicture(index) {
        if (currentSlide !== index) setCurrentSlide(index);
    }

    function showPreviousPicture(event) {
        event.preventDefault();
        setCurrentSlide(currentSlide === 1 ? pictures.length : currentSlide - 1);
    }

    function showNextPicture(event) {
        event.preventDefault();
        setCurrentSlide(currentSlide === pictures.length ? 1 : currentSlide + 1);
    }

    function openLightbox(event) {
        if (!lightbox && window.matchMedia('(min-width: 992px)').matches) setLightboxIsOpen(true);
    }

    function closeLightbox(event) {
        event.preventDefault();
        setLightboxIsOpen(false);
    }

    return (
        <Container className={className} ref={ref}>

            {lightbox &&
                <CloseButton onClick={closeLightbox}>
                    <CloseIcon />
                </CloseButton>
            }

            <Display>
                <View>
                    <Slider
                        currentSlide={currentSlide}
                        numberOfPictures={pictures.length}
                    >
                        {pictures.map((picture, index) =>
                            <Slide
                                src={picture.normal}
                                numberOfPictures={pictures.length}
                                key={index}
                                onClick={openLightbox}
                            />
                        )}
                    </Slider>
                </View>
                <PreviousButton lightbox={lightbox} onClick={showPreviousPicture} />
                <NextButton lightbox={lightbox} onClick={showNextPicture} />
            </Display>

            <Thumbnails lightbox={lightbox} numberOfPictures={pictures.length}>
                {pictures.map((picture, index) => {
                    const slide = index + 1;
                    const isActive = currentSlide === slide;
                    return (
                        <Thumbnail
                            key={index}
                            thumbnail={picture.thumbnail}
                            action={() => showPicture(slide)}
                            isActive={isActive}
                        />
                    );
                })}
            </Thumbnails>

        </Container>
    );
});

export default Gallery;