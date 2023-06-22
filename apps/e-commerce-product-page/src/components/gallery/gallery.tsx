import { useState } from "react";
import * as Styled from "./gallery.style";
import Slider from "@components/solution/ecommerce-product-page/slider";
import Thumbnail from "@components/solution/ecommerce-product-page/thumbnail";
import IconButton from "@components/solution/ecommerce-product-page/icon-button";
import BasePreviousIcon from "@assets/solution/ecommerce-product-page/icon-previous.svg?react";
import BaseNextIcon from "@assets/solution/ecommerce-product-page/icon-next.svg?react";

function Gallery({
  className,
  thumbnails,
  images,
  setLightboxImage,
  setLightboxIsOpen,
  scrollY,
}) {
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
    if (window.matchMedia("(min-width: 992px)").matches) {
      setLightboxIsOpen(true);
      const body = document.body;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}`;
      body.style.left = "0px";
      body.style.width = "100%";
    }
  }

  return (
    <Container className={className}>
      <Featured onClick={openLightbox}>
        <Slider images={images} currentImage={featuredImage}>
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
}

export default Gallery;
