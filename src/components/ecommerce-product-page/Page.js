import styled from "styled-components";
import { useState } from "react";
import TopAppBar from "@components/ecommerce-product-page/TopAppBar";
import Carrousel from "@components/ecommerce-product-page/Carrousel";
import Gallery from "@components/ecommerce-product-page/Gallery";
import Drawer from "@components/ecommerce-product-page/Drawer";
import Cart from "@components/ecommerce-product-page/Cart";
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

const FixedCart = styled(Cart)`
    visibility: ${props => props.cartIsOpen ? "visible" : "hidden"};
    opacity: ${props => props.cartIsOpen ? "1" : "0"};
    position: fixed;
    z-index: 80;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    transition-property: visibility, opacity;
    transition-duration: 300ms;
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

const SpacedCarrousel = styled(Carrousel)`
    margin-bottom: 2rem;

    @media screen and (min-width: 576px) {
        display: none;
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

const TabletGallery = styled(Gallery)`
    display: none;

    @media screen and (min-width: 576px) {
        display: block;
        margin-bottom: 2rem;
    }
`;

const Scrim = styled.div`
    visibility: ${props => props.drawerIsOpen ? "visible" : "hidden"};
    opacity: ${props => props.drawerIsOpen ? "0.75" : "0"};
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
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    function HandleScrim() {
        setDrawerIsOpen(false);
    }

    return (
        <Container>
            <SpacedCarrousel />
            <TabletGallery />
            <PaddedProduct
                cartItemsNumber={cartItemsNumber}
                setCartItemsNumber={setCartItemsNumber}
            />
            <FixedTopAppBar
                setDrawerIsOpen={setDrawerIsOpen}
                setCartIsOpen={setCartIsOpen}
                cartIsOpen={cartIsOpen}
            />
            <FixedCart
                cartIsOpen={cartIsOpen}
            />
            <FixedDrawer
                drawerIsOpen={drawerIsOpen}
                setDrawerIsOpen={setDrawerIsOpen}
            />
            <Scrim
                drawerIsOpen={drawerIsOpen}
                onClick={HandleScrim}
            />
        </Container>
    );
}

export default Page;