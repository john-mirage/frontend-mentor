import styled from "styled-components";
import { useState } from "react";
import TopAppBar from "@components/ecommerce-product-page/TopAppBar";
import Gallery from "@components/ecommerce-product-page/Gallery";
import Drawer from "@components/ecommerce-product-page/Drawer";
import Product from "@components/ecommerce-product-page/Product";

const Container = styled.main`
    width: 100%;
    padding-top: 7rem;

    @media screen and (min-width: 576px) {
        width: 54rem;
        margin-left: auto;
        margin-right: auto;
        padding-top: 15rem;
        padding-left: 1.8rem;
        padding-right: 1.8rem;
    }
`;

const FixedTopAppBar = styled(TopAppBar)`
    position: fixed;
    z-index: 80;
    top: 0;
    left: 0;
`;

const FixedDrawer = styled(Drawer)`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transform: ${props => props.drawerIsOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 300ms;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const SpacedGallery = styled(Gallery)`
    margin-bottom: 2rem;
`;

const FixedGallery = styled(Gallery)`
    visibility: ${props => props.lightboxIsOpen ? "visible" : "hidden"};
    opacity: ${props => props.lightboxIsOpen ? "1" : "0"};
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 6rem);
    transition-property: visibility, opacity;
    transition-duration: 300ms;

    @media screen and (min-width: 820px) {
        width: 76rem;
    }
`;

const PaddedProduct = styled(Product)`
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: 576px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const Scrim = styled.div`
    visibility: ${props => props.drawerIsOpen || props.lightboxIsOpen ? "visible" : "hidden"};
    opacity: ${props => props.drawerIsOpen || props.lightboxIsOpen ? "0.9" : "0"};
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.neutral.black};
    transition-property: visibility, opacity;
    transition-duration: 300ms;
    cursor: pointer;
`;

function Page() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    function HandleScrim() {
        if (drawerIsOpen) setDrawerIsOpen(false);
        if (lightboxIsOpen) setLightboxIsOpen(false);
    }

    return (
        <Container>
            <SpacedGallery
                setLightboxIsOpen={setLightboxIsOpen}
            />
            <PaddedProduct
                cartItemsNumber={cartItemsNumber}
                setCartItemsNumber={setCartItemsNumber}
            />
            <FixedTopAppBar
                setDrawerIsOpen={setDrawerIsOpen}
                cartItemsNumber={cartItemsNumber}
                setCartItemsNumber={setCartItemsNumber}
            />
            <FixedGallery
                lightboxIsOpen={lightboxIsOpen}
                setLightboxIsOpen={setLightboxIsOpen}
                lightbox
            />
            <FixedDrawer
                drawerIsOpen={drawerIsOpen}
                setDrawerIsOpen={setDrawerIsOpen}
            />
            <Scrim
                drawerIsOpen={drawerIsOpen}
                lightboxIsOpen={lightboxIsOpen}
                onClick={HandleScrim}
            />
        </Container>
    );
}

export default Page;