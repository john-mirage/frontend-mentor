import styled from "styled-components";
import { useState } from "react";
import productImage1 from "@assets/ecommerce-product-page/image-product-1.jpg";
import productImage2 from "@assets/ecommerce-product-page/image-product-2.jpg";
import productImage3 from "@assets/ecommerce-product-page/image-product-3.jpg";
import productImage4 from "@assets/ecommerce-product-page/image-product-4.jpg";
import productImageThumbnail1 from "@assets/ecommerce-product-page/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "@assets/ecommerce-product-page/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "@assets/ecommerce-product-page/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "@assets/ecommerce-product-page/image-product-4-thumbnail.jpg";

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Featured = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1rem;
    margin-bottom: 4rem;
`;

const Pictures = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
`;

const Picture = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1rem;
    ${props => props.isActive && `outline: 0.2rem solid ${props.theme.color.primary.orange};`}
`;

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

function Gallery(props) {
    const [featuredPicture, setFeaturedPicture] = useState(productImage1.src);

    function handleFeaturedPicture(picture) {
        if (picture !== featuredPicture) {
            setFeaturedPicture(picture);
        }
    }

    return (
        <Container className={props.className}>
            <Featured src={featuredPicture} />
            <Pictures>
                {pictures.map((picture, index) => {
                    const isActive = featuredPicture === picture.normal;
                    return (
                        <Picture
                            src={picture.thumbnail}
                            onClick={() => handleFeaturedPicture(picture.normal)}
                            key={index}
                            isActive={isActive}
                        />
                    );
                })}
            </Pictures>
        </Container>
    );
}

export default Gallery;