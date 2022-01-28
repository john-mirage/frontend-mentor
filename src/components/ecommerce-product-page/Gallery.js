import styled from "styled-components";
import React, { useContext, useState } from "react";
import productImage1 from "@assets/ecommerce-product-page/image-product-1.jpg";
import productImage2 from "@assets/ecommerce-product-page/image-product-2.jpg";
import productImage3 from "@assets/ecommerce-product-page/image-product-3.jpg";
import productImage4 from "@assets/ecommerce-product-page/image-product-4.jpg";
import productImageThumbnail1 from "@assets/ecommerce-product-page/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "@assets/ecommerce-product-page/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "@assets/ecommerce-product-page/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "@assets/ecommerce-product-page/image-product-4-thumbnail.jpg";
import previousIcon from "@assets/ecommerce-product-page/icon-previous.svg";
import nextIcon from "@assets/ecommerce-product-page/icon-next.svg";
import closeIcon from "@assets/ecommerce-product-page/icon-close.svg";
import { PageContext } from "@components/ecommerce-product-page/PageContext";

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
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    margin-left: auto;
    margin-bottom: 2rem;
    background-image: url(${closeIcon});
    background-size: 2.4rem;
    background-repeat: no-repeat;
    background-position: center;
`;

const Thumbnails = styled.div`
    display: none;

    @media screen and (min-width: 576px) {
        display: grid;
        grid-template-columns: repeat(${props => props.numberOfPictures}, 1fr);
        gap: 3rem;
        margin-top: 4rem;
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1rem;
`;

const Gallery = React.forwardRef((props, ref) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const pageContext = useContext(PageContext);

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
        if (!props.lightbox && window.matchMedia('(min-width: 820px)').matches) pageContext.setLightboxIsOpen(true);
    }

    function closeLightbox(event) {
        event.preventDefault();
        pageContext.setLightboxIsOpen(false);
    }

    return (
        <Container className={props.className} ref={ref}>

            {props.lightbox && <CloseButton onClick={closeLightbox} />}

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
                <PreviousButton lightbox={props.lightbox} onClick={showPreviousPicture} />
                <NextButton lightbox={props.lightbox} onClick={showNextPicture} />
            </Display>

            <Thumbnails numberOfPictures={pictures.length}>
                {pictures.map((picture, index) => {
                    return (
                        <Thumbnail
                            src={picture.thumbnail}
                            onClick={() => showPicture(index + 1)}
                            key={index}
                        />
                    );
                })}
            </Thumbnails>

        </Container>
    );
});

export default Gallery;