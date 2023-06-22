import { forwardRef, useEffect, useState } from "react";
import * as Styled from "./lightbox.style";

const Lightbox = forwardRef(
  (
    { className, thumbnails, images, initialFeaturedImage, setLightboxIsOpen },
    ref
  ) => {
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
      <Container className={className} ref={ref}>
        <Dialog>
          <CloseButton action={closeLightBox}>
            <CloseIcon />
          </CloseButton>

          <Featured>
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
                  action={() => setFeaturedImage(imageIndex)}
                  isActive={isActive}
                />
              );
            })}
          </Thumbnails>
        </Dialog>
      </Container>
    );
  }
);

export default Lightbox;
