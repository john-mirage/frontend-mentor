import styled from "styled-components";
import React from "react";
import BaseTopAppBar from "@components/ecommerce-product-page/TopAppBar";
import BaseGallery from "@components/ecommerce-product-page/Gallery";
import BaseDrawer from "@components/ecommerce-product-page/Drawer";
import BaseProduct from "@components/ecommerce-product-page/Product";
import { PageContext } from "@components/ecommerce-product-page/PageContext";

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

const TopAppBar = styled(BaseTopAppBar)`
    position: fixed;
    z-index: 80;
    top: 0;
    left: 0;
`;

const Drawer = styled(BaseDrawer)`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transform: ${props => props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 300ms;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Gallery = styled(BaseGallery)`
    margin-bottom: 2rem;
`;

const Lightbox = styled(BaseGallery)`
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    opacity: ${props => props.isOpen ? "1" : "0"};
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

const Product = styled(BaseProduct)`
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: 576px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const Scrim = styled.div`
    visibility: ${props => props.active ? "visible" : "hidden"};
    opacity: ${props => props.active ? "0.9" : "0"};
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

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.setDrawerIsOpen = (drawerIsOpen) => {
            this.setState({ drawerIsOpen: drawerIsOpen });
        }

        this.setLightboxIsOpen = (lightboxIsOpen) => {
            this.setState({ lightboxIsOpen: lightboxIsOpen });
        }

        this.setCartItemsNumber = (cartItemsNumber) => {
            this.setState({ cartItemsNumber: cartItemsNumber });
        }

        this.state = {
            drawerIsOpen: false,
            setDrawerIsOpen: this.setDrawerIsOpen,
            lightboxIsOpen: false,
            setLightboxIsOpen: this.setLightboxIsOpen,
            cartItemsNumber: 0,
            setCartItemsNumber: this.setCartItemsNumber,
        }
    }

    render() {
        return (
            <Container>
                <PageContext.Provider value={this.state}>
                    <Gallery />
                    <Product />
                    <TopAppBar />
                    <Lightbox isOpen={this.state.lightboxIsOpen} lightbox />
                    <Drawer isOpen={this.state.drawerIsOpen} />
                    <Scrim
                        active={this.state.drawerIsOpen || this.state.lightboxIsOpen}
                        onClick={() => this.state.drawerIsOpen && this.setDrawerIsOpen(false)}
                    />
                </PageContext.Provider>
            </Container>
        );
    }
}

export default Page;