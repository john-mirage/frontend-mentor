import styled from "styled-components";
import productImage1 from "@assets/ecommerce-product-page/image-product-1.jpg";
import productImage2 from "@assets/ecommerce-product-page/image-product-2.jpg";
import productImage3 from "@assets/ecommerce-product-page/image-product-3.jpg";
import productImage4 from "@assets/ecommerce-product-page/image-product-4.jpg";
import previousIcon from "@assets/ecommerce-product-page/icon-previous.svg";
import nextIcon from "@assets/ecommerce-product-page/icon-next.svg";
import { useState } from "react";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow-x: hidden;
`;

const Slider = styled.div`
    display: flex;
    flex-direction: row;
    width: ${props => (props.numberOfImages * 100)}%;
    height: auto;
    transform: translateX(-${props => (100 / props.numberOfImages) * (props.currentSlide - 1)}%);
    transition: transform 300ms;
`;

const Slide = styled.img`
    width: ${props => (100 / props.numberOfImages)}%;
    height: auto;
    max-height: 100%;
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
`;

const PreviousButton = styled(Button)`
    left: 2.4rem;
    background-image: url(${previousIcon.src});
`;

const NextButton = styled(Button)`
    right: 2.4rem;
    background-image: url(${nextIcon.src});
`;

function Carrousel(props) {
    const images = [productImage1, productImage2, productImage3, productImage4];
    const numberOfImages = images.length;
    const [currentSlide, setCurrentSlide] = useState(1);

    function handlePreviousButton(event) {
        event.preventDefault();
        setCurrentSlide(currentSlide === 1 ? numberOfImages : currentSlide - 1);
    }

    function handleNextButton(event) {
        event.preventDefault();
        setCurrentSlide(currentSlide === numberOfImages ? 1 : currentSlide + 1)
    }

    return (
        <Container className={props.className}>
            <Slider
                currentSlide={currentSlide}
                numberOfImages={numberOfImages}
            >
                {images.map((image, index) =>
                    <Slide
                        src={image.src}
                        numberOfImages={numberOfImages}
                        key={index}
                    />
                )}
            </Slider>
            <PreviousButton onClick={handlePreviousButton} />
            <NextButton onClick={handleNextButton} />
        </Container>
    );
}

export default Carrousel;