import styled from "styled-components";
import { useContext, useState } from "react";
import { PageContext } from "@components/ecommerce-product-page/PageContext";
import IconButton from "@components/ecommerce-product-page/IconButton";
import ProfileButton from "@components/ecommerce-product-page/ProfileButton";
import BaseCart from "@components/ecommerce-product-page/Cart";
import BaseNavigation from "@components/ecommerce-product-page/Navigation";
import BaseBadge from "@components/ecommerce-product-page/Badge";
import BaseMenuIcon from "@assets/ecommerce-product-page/icon-menu.svg?react";
import BaseLogo from "@assets/ecommerce-product-page/logo.svg?react";
import BaseCartIcon from "@assets/ecommerce-product-page/icon-cart.svg?react";
import Tippy from "@tippyjs/react/headless";


const Container = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: ${props => props.theme.color.neutral.white};

    @media screen and (min-width: 992px) {
        height: 10rem;
    }
`;

const Logo = styled(BaseLogo)`
    height: 2rem;
    fill: ${props => props.theme.color.neutral.veryDarkBlue};

    @media screen and (min-width: 992px) {
        margin-right: 6rem;
    }
`;

const MenuButton = styled(IconButton)`
    margin-left: -1.6rem;
    margin-right: 0.4rem;

    @media screen and (min-width: 992px) {
        display: none;
    }
`;

const MenuIcon = styled(BaseMenuIcon)`
    width: 1.4rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const CartButton = styled(IconButton)`
    margin-left: auto;
    margin-right: 0.4rem;
    
    @media screen and (min-width: 992px) {
        margin-right: 1.2rem;
    }
`;

const CartIcon = styled(BaseCartIcon)`
    width: 2rem;
    fill: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const Navigation = styled(BaseNavigation)`
    display: none;

    @media screen and (min-width: 992px) {
        display: flex;
    }
`;

const Cart = styled(BaseCart)`
    width: 40rem;
`;

const Badge = styled(BaseBadge)`
    position: absolute;
    top: 0.6rem;
    right: 0.4rem;
`;

function TopAppBar(props) {
    const pageContext = useContext(PageContext);

    function handleMenu(event) {
        event.preventDefault();
        pageContext.setDrawerIsOpen(true);
    }

    function handleCart(event) {
        event.preventDefault();
        pageContext.setCartIsOpen(!pageContext.cartIsOpen);
    }

    return (
        <Container className={props.className}>
            <MenuButton action={handleMenu}>
                <MenuIcon />
            </MenuButton>

            <Logo />

            <Navigation type="TopAppBar" />

            <Tippy
                render={attrs => (<Cart {...attrs}/>)}
                interactive={true}
                visible={pageContext.cartIsOpen}
                onClickOutside={() => pageContext.setCartIsOpen(false)}
                appendTo="parent"
            >
                <CartButton action={handleCart}>
                    <CartIcon />
                    {pageContext.cartItemsNumber > 0 && <Badge key={pageContext.cartItemsNumber} label={pageContext.cartItemsNumber}/>}
                </CartButton>
            </Tippy>

            <ProfileButton />
        </Container>
    );
}

export default TopAppBar;