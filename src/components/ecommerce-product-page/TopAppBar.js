import styled from "styled-components";
import Tippy from "@tippyjs/react/headless";
import IconButton from "@components/ecommerce-product-page/IconButton";
import ProfileButton from "@components/ecommerce-product-page/ProfileButton";
import BaseCart from "@components/ecommerce-product-page/Cart";
import BaseNavigation from "@components/ecommerce-product-page/Navigation";
import BaseBadge from "@components/ecommerce-product-page/Badge";
import BaseMenuIcon from "@assets/ecommerce-product-page/icon-menu.svg?react";
import BaseLogo from "@assets/ecommerce-product-page/logo.svg?react";
import BaseCartIcon from "@assets/ecommerce-product-page/icon-cart.svg?react";

const Container = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: ${props => props.theme.color.neutral.white};

    @media screen and (min-width: 992px) {
        height: 12rem;
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
        margin-right: 2.5rem;
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

function TopAppBar({ className, cartIsOpen, cartItemsNumber, setDrawerIsOpen, setCartIsOpen, setCartItemsNumber }) {

    function handleMenu(event) {
        event.preventDefault();
        setDrawerIsOpen(true);
    }

    function handleCart(event) {
        event.preventDefault();
        setCartIsOpen(!cartIsOpen);
    }

    return (
        <Container className={className}>
            <MenuButton action={handleMenu}>
                <MenuIcon />
            </MenuButton>

            <Logo />

            <Navigation type="TopAppBar" />

            <Tippy
                render={attrs => (
                    <Cart
                        cartItemsNumber={cartItemsNumber}
                        setCartItemsNumber={setCartItemsNumber}
                        {...attrs}
                    />
                )}
                interactive={true}
                visible={cartIsOpen}
                onClickOutside={() => setCartIsOpen(false)}
                appendTo="parent"
            >
                <CartButton action={handleCart}>
                    <CartIcon />
                    {cartItemsNumber > 0 &&
                        <Badge key={cartItemsNumber}>{cartItemsNumber}</Badge>
                    }
                </CartButton>
            </Tippy>

            <ProfileButton />
        </Container>
    );
}

export default TopAppBar;