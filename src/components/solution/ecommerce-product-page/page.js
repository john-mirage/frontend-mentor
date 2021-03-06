import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BaseTopAppBar from "@components/solution/ecommerce-product-page/top-app-bar";
import BaseGallery from "@components/solution/ecommerce-product-page/gallery";
import BaseLightbox from "@components/solution/ecommerce-product-page/lightbox";
import BaseDrawer from "@components/solution/ecommerce-product-page/drawer";
import BaseProduct from "@components/solution/ecommerce-product-page/product";
import { motion, AnimatePresence } from "framer-motion";
import productImage1 from "@assets/solution/ecommerce-product-page/image-product-1.jpg";
import productImage2 from "@assets/solution/ecommerce-product-page/image-product-2.jpg";
import productImage3 from "@assets/solution/ecommerce-product-page/image-product-3.jpg";
import productImage4 from "@assets/solution/ecommerce-product-page/image-product-4.jpg";
import productThumbnail1 from "@assets/solution/ecommerce-product-page/image-product-1-thumbnail.jpg";
import productThumbnail2 from "@assets/solution/ecommerce-product-page/image-product-2-thumbnail.jpg";
import productThumbnail3 from "@assets/solution/ecommerce-product-page/image-product-3-thumbnail.jpg";
import productThumbnail4 from "@assets/solution/ecommerce-product-page/image-product-4-thumbnail.jpg";
import Head from "next/head";

const thumbnails = [
    { src: productThumbnail1.src, alt: '' },
    { src: productThumbnail2.src, alt: '' },
    { src: productThumbnail3.src, alt: '' },
    { src: productThumbnail4.src, alt: '' },
];

const images = [
    { src: productImage1.src, alt: '' },
    { src: productImage2.src, alt: '' },
    { src: productImage3.src, alt: '' },
    { src: productImage4.src, alt: '' },
];

const Container = styled.main`
    width: 100%;
    height: auto;
    padding-top: 7rem;
    padding-bottom: 14rem;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        width: 54rem;
        margin-left: auto;
        margin-right: auto;
        padding-top: 15rem;
    }

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        padding-top: 0;
        width: 96rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        width: 114rem;
    }
`;

const TopAppBar = styled(BaseTopAppBar)`
    position: fixed;
    z-index: 80;
    top: 0;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        position: relative;
        margin-bottom: 10rem;
        padding-left: 0;
        padding-right: 0;
        box-shadow: none;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    }
`;

const Gallery = styled(BaseGallery)`
    margin-bottom: 3rem;

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        width: 50%;
        padding-left: 4rem;
        padding-right: 8rem;
        margin-bottom: 0;
    }
`;

const Product = styled(BaseProduct)`
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        padding-left: 0;
        padding-right: 0;
    }

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        width: 50%;
        padding-right: 4rem;
    }
`;

const Drawer = styled(motion(BaseDrawer))`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Lightbox = styled(motion(BaseLightbox))`
    position: fixed;
    display: flex;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

const Scrim = styled(motion.div)`
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.neutral.black};
`;

function Page() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [lightBoxImage, setLightboxImage] = useState(1);
    const [scrollY, setScrollY] = useState('0px');

    function handleScrim(event) {
        event.preventDefault();
        if (drawerIsOpen) setDrawerIsOpen(false);
    }

    function listenScroll() {
        setScrollY(`${window.scrollY}px`);
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScroll);
        return function cleanUp() {
            window.removeEventListener('scroll', listenScroll);
        }
    }, []);

    return (
        <>
            <Head>
                <link rel="preload" as="image" href={productImage1.src} />
                <link rel="preload" as="image" href={productImage2.src} />
                <link rel="preload" as="image" href={productImage3.src} />
                <link rel="preload" as="image" href={productImage4.src} />
            </Head>
            <Container>
                <TopAppBar
                    cartIsOpen={cartIsOpen}
                    cartItemsNumber={cartItemsNumber}
                    setDrawerIsOpen={setDrawerIsOpen}
                    setCartIsOpen={setCartIsOpen}
                    setCartItemsNumber={setCartItemsNumber}
                />
                <Gallery
                    images={images}
                    thumbnails={thumbnails}
                    setLightboxIsOpen={setLightboxIsOpen}
                    setLightboxImage={setLightboxImage}
                    scrollY={scrollY}
                />
                <Product
                    cartIsOpen={cartIsOpen}
                    cartItemsNumber={cartItemsNumber}
                    setCartIsOpen={setCartIsOpen}
                    setCartItemsNumber={setCartItemsNumber}
                />
                <AnimatePresence>
                    {lightboxIsOpen && (
                        <Lightbox
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
                        <Drawer
                            key="drawer"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", duration: 0.3 }}
                            setDrawerIsOpen={setDrawerIsOpen}
                        />
                    )}
                    {(lightboxIsOpen || drawerIsOpen) && (
                        <Scrim
                            key="scrim"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", duration: 0.3 }}
                            onClick={handleScrim}
                        />
                    )}
                </AnimatePresence>
            </Container>
        </>
    );
}

export default Page;