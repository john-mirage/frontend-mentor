import styled from "styled-components";
import React from "react";
import BaseTopAppBar from "@components/ecommerce-product-page/TopAppBar";
import BaseGallery from "@components/ecommerce-product-page/Gallery";
import BaseDrawer from "@components/ecommerce-product-page/Drawer";
import BaseProduct from "@components/ecommerce-product-page/Product";
import { PageContext } from "@components/ecommerce-product-page/PageContext";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.main`
    width: 100%;
    height: auto;
    padding-top: 7rem;
    padding-bottom: 10rem;

    @media screen and (min-width: 576px) {
        width: 54rem;
        margin-left: auto;
        margin-right: auto;
        padding-top: 15rem;
    }

    @media screen and (min-width: 992px) {
        padding-top: 0;
        width: 96rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 1200px) {
        width: 114rem;
    }
`;

const TopAppBar = styled(BaseTopAppBar)`
    position: fixed;
    z-index: 80;
    top: 0;
    left: 0;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    @media screen and (min-width: 992px) {
        position: static;
        margin-bottom: 10rem;
        padding-left: 0;
        padding-right: 0;
        box-shadow: none;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    }
`;

const Gallery = styled(BaseGallery)`
    margin-bottom: 2rem;

    @media screen and (min-width: 992px) {
        width: 50%;
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

const Product = styled(BaseProduct)`
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: 576px) {
        padding-left: 0;
        padding-right: 0;
    }

    @media screen and (min-width: 992px) {
        width: 50%;
        padding-left: 4rem;
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

const Lightbox = styled(motion(BaseGallery))`
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 6rem);

    @media screen and (min-width: 820px) {
        width: 76rem;
    }
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

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.setDrawerIsOpen = (drawerIsOpen) => this.setState({ drawerIsOpen: drawerIsOpen });
        this.setLightboxIsOpen = (lightboxIsOpen) => this.setState({ lightboxIsOpen: lightboxIsOpen });
        this.setCartItemsNumber = (cartItemsNumber) => this.setState({ cartItemsNumber: cartItemsNumber });
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
                    <TopAppBar />
                    <Gallery />
                    <Product />
                    <AnimatePresence>
                        {this.state.lightboxIsOpen && (
                            <Lightbox
                                key="lightbox"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                lightbox
                            />
                        )}
                        {this.state.drawerIsOpen && (
                            <Drawer
                                key="drawer"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "tween" }}
                            />
                        )}
                        {(this.state.lightboxIsOpen || this.state.drawerIsOpen) && (
                            <Scrim
                                key="scrim"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => this.setDrawerIsOpen(false)}
                            />
                        )}
                    </AnimatePresence>
                </PageContext.Provider>
            </Container>
        );
    }
}

export default Page;