import styled from "styled-components";
import { useState } from "react";
import TopAppBar from "@components/ecommerce-product-page/TopAppBar";
import Modal from "@components/ecommerce-product-page/Modal";
import Drawer from "@components/ecommerce-product-page/Drawer";
import Cart from "@components/ecommerce-product-page/Cart";

const Container = styled.main`
    padding-top: 7rem;
`;

const StyledTopAppBar = styled(TopAppBar)`
    position: fixed;
    z-index: 80;
    top: 0;
    left: 0;
`;

const StyledCart = styled(Cart)`
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

const StyledDrawer = styled(Drawer)`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transform: ${props => props.drawerIsOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 300ms;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
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
    return (
        <Container>
            <StyledTopAppBar
                setDrawerIsOpen={setDrawerIsOpen}
                setCartIsOpen={setCartIsOpen}
                cartIsOpen={cartIsOpen}
            />
            <StyledCart
                cartIsOpen={cartIsOpen}
            />
            <Modal />
            <StyledDrawer
                drawerIsOpen={drawerIsOpen}
                setDrawerIsOpen={setDrawerIsOpen}
            />
            <Scrim
                drawerIsOpen={drawerIsOpen}
                onClick={() => setDrawerIsOpen(false)}
            />
        </Container>
    );
}

export default Page;