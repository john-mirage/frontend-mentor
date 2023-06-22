import { useState } from "react";
import * as Styled from "./gallery.style";
import Slider from "../slider";
import Thumbnail from "../thumbnail";

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  className?: string;
  thumbnails: Image[];
  images: Image[];
  setLightboxImage: (imageIndex: number) => void;
  setLightboxIsOpen: (lightboxIsOpen: boolean) => void;
  scrollY: string;
}

const Gallery = ({
  className,
  thumbnails,
  images,
  setLightboxImage,
  setLightboxIsOpen,
  scrollY,
}: GalleryProps) => {
  const [featuredImage, setFeaturedImage] = useState(1);

  function showPreviousImage() {
    setFeaturedImage(featuredImage <= 1 ? images.length : featuredImage - 1);
  }

  function showNextImage() {
    setFeaturedImage(featuredImage >= images.length ? 1 : featuredImage + 1);
  }

  function showPicture(imageIndex: number) {
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
    <Styled.Container className={className}>
      <Styled.Featured onClick={openLightbox}>
        <Slider images={images} currentImage={featuredImage}>
          <Styled.PreviousButton action={showPreviousImage}>
            <Styled.PreviousIcon />
          </Styled.PreviousButton>
          <Styled.NextButton action={showNextImage}>
            <Styled.NextIcon />
          </Styled.NextButton>
        </Slider>
      </Styled.Featured>

      <Styled.Thumbnails thumbnailNumber={thumbnails.length}>
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
      </Styled.Thumbnails>
    </Styled.Container>
  );
};

export default Gallery;
