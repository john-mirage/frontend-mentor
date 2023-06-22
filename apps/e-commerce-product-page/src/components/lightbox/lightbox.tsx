import { forwardRef, useEffect, useState } from "react";
import * as Styled from "./lightbox.style";
import Thumbnail from "../thumbnail";

interface Image {
  src: string;
  alt: string;
}

interface LightboxProps {
  className?: string;
  thumbnails: Image[];
  images: Image[];
  initialFeaturedImage: number;
  setLightboxIsOpen: (lightboxIsOpen: boolean) => void;
}

const Lightbox = forwardRef(
  (
    {
      className,
      thumbnails,
      images,
      initialFeaturedImage,
      setLightboxIsOpen,
    }: LightboxProps,
    ref
  ) => {
    const [featuredImage, setFeaturedImage] = useState(initialFeaturedImage);

    function showPreviousImage() {
      setFeaturedImage(featuredImage <= 1 ? images.length : featuredImage - 1);
    }

    function showNextImage() {
      setFeaturedImage(featuredImage >= images.length ? 1 : featuredImage + 1);
    }

    function closeLightBox() {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      setLightboxIsOpen(false);
    }

    function listenResize() {
      if (window.innerWidth < 976) closeLightBox();
    }

    useEffect(() => {
      window.addEventListener("resize", listenResize);
      return function cleanUp() {
        window.removeEventListener("resize", listenResize);
      };
    }, []);

    return (
      <Styled.Container className={className} ref={ref}>
        <Styled.Dialog>
          <Styled.CloseButton action={closeLightBox}>
            <Styled.CloseIcon />
          </Styled.CloseButton>

          <Styled.Featured>
            <Styled.Slider images={images} currentImage={featuredImage}>
              <Styled.PreviousButton action={showPreviousImage}>
                <Styled.PreviousIcon />
              </Styled.PreviousButton>
              <Styled.NextButton action={showNextImage}>
                <Styled.NextIcon />
              </Styled.NextButton>
            </Styled.Slider>
          </Styled.Featured>

          <Styled.Thumbnails thumbnailNumber={thumbnails.length}>
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
          </Styled.Thumbnails>
        </Styled.Dialog>
      </Styled.Container>
    );
  }
);

export default Lightbox;
