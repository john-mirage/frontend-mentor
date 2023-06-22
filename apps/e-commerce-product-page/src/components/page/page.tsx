import * as Styled from "./page.style";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import productImage1 from "../../images/image-product-1.jpg";
import productImage2 from "../../images/image-product-2.jpg";
import productImage3 from "../../images/image-product-3.jpg";
import productImage4 from "../../images/image-product-4.jpg";
import productThumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../images/image-product-4-thumbnail.jpg";

const thumbnails = [
  { src: productThumbnail1, alt: "" },
  { src: productThumbnail2, alt: "" },
  { src: productThumbnail3, alt: "" },
  { src: productThumbnail4, alt: "" },
];

const images = [
  { src: productImage1, alt: "" },
  { src: productImage2, alt: "" },
  { src: productImage3, alt: "" },
  { src: productImage4, alt: "" },
];

function Page() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [lightBoxImage, setLightboxImage] = useState(1);
  const [scrollY, setScrollY] = useState("0px");

  function handleScrim(event) {
    event.preventDefault();
    if (drawerIsOpen) setDrawerIsOpen(false);
  }

  function listenScroll() {
    setScrollY(`${window.scrollY}px`);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return function cleanUp() {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  return (
    <>
      <Styled.Container>
        <Styled.TopAppBar
          cartIsOpen={cartIsOpen}
          cartItemsNumber={cartItemsNumber}
          setDrawerIsOpen={setDrawerIsOpen}
          setCartIsOpen={setCartIsOpen}
          setCartItemsNumber={setCartItemsNumber}
        />
        <Styled.Gallery
          images={images}
          thumbnails={thumbnails}
          setLightboxIsOpen={setLightboxIsOpen}
          setLightboxImage={setLightboxImage}
          scrollY={scrollY}
        />
        <Styled.Product
          cartIsOpen={cartIsOpen}
          cartItemsNumber={cartItemsNumber}
          setCartIsOpen={setCartIsOpen}
          setCartItemsNumber={setCartItemsNumber}
        />
        <AnimatePresence>
          {lightboxIsOpen && (
            <Styled.Lightbox
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              images={images}
              thumbnails={thumbnails}
              initialFeaturedImage={lightBoxImage}
              setLightboxIsOpen={setLightboxIsOpen}
            />
          )}
          {drawerIsOpen && (
            <Styled.Drawer
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.3 }}
              setDrawerIsOpen={setDrawerIsOpen}
            />
          )}
          {(lightboxIsOpen || drawerIsOpen) && (
            <Styled.Scrim
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              onClick={handleScrim}
            />
          )}
        </AnimatePresence>
      </Styled.Container>
    </>
  );
}

export default Page;
