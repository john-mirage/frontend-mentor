import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Cart from "@components/ecommerce-product-page/Cart";
import IconButton from "@components/ecommerce-product-page/IconButton";
import Navigation from "@components/ecommerce-product-page/Navigation";
import menuIcon from "@assets/ecommerce-product-page/icon-menu.svg";
import cartIcon from "@assets/ecommerce-product-page/icon-cart.svg";
import avatar from "@assets/ecommerce-product-page/image-avatar.png";
import logo from "@assets/ecommerce-product-page/logo.svg";

const Container = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 7rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    @media screen and (min-width: 900px) {
        height: 10rem;
    }
`;

const MenuIcon = styled(IconButton)`
    margin-left: -1.6rem;
    margin-right: 0.4rem;

    @media screen and (min-width: 900px) {
        display: none;
    }
`;

const CartIcon = styled(IconButton)`
    margin-left: auto;
`;

const ProfileIcon = styled(IconButton)`
    margin-right: -1.2rem;
`;

const Logo = styled.img`
    width: auto;
    height: 2rem;

    @media screen and (min-width: 900px) {
        margin-right: 6rem;
    }
`;

const DesktopNavigation = styled(Navigation)`
    display: none;

    @media screen and (min-width: 900px) {
        display: flex;
    }
`;

const FixedCart = styled(Cart)`
    visibility: ${props => props.cartIsOpen ? "visible" : "hidden"};
    opacity: ${props => props.cartIsOpen ? "1" : "0"};
    position: absolute;
    z-index: 80;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    transition-property: visibility, opacity;
    transition-duration: 300ms;
`;

const BadgeAnimation = keyframes`
    0% { transform: scale(1); }
    14% { transform: scale(1.3); }
    28% { transform: scale(1); }
    42% { transform: scale(1.3); }
    70% { transform: scale(1); }
`;

const Badge = styled.span`
    position: absolute;
    top: 0.6rem;
    right: 0.4rem;
    height: 1.4rem;
    border-radius: 0.7rem;
    background-color: ${props => props.theme.color.primary.orange};
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.4rem;
    color: ${props => props.theme.color.neutral.white};
    animation-name: ${BadgeAnimation};
    animation-duration: calc(1000ms * 1.3);
    animation-timing-function: ease-in-out;
`;

function TopAppBar(props) {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function handleMenu(event) {
        event.preventDefault();
        props.setDrawerIsOpen(true);
    }

    function handleCart(event) {
        event.preventDefault();
        setCartIsOpen(!cartIsOpen);
    }

    return (
        <Container className={props.className}>
            <MenuIcon
                icon={menuIcon}
                iconSize="1.6rem"
                action={handleMenu}
            />
            <Logo
                src={logo}
            />
            <DesktopNavigation type="TopAppBar" />
            <CartIcon
                icon={cartIcon}
                iconSize="2.4rem"
                action={handleCart}
            >
                {props.cartItemsNumber > 0 && <Badge key={props.cartItemsNumber}>{props.cartItemsNumber}</Badge>}
            </CartIcon>
            <ProfileIcon
                icon={avatar.src}
                iconSize="2.4rem"
                isAvatar
            />
            <FixedCart
                cartIsOpen={cartIsOpen}
                cartItemsNumber={props.cartItemsNumber}
                setCartItemsNumber={props.setCartItemsNumber}
            />
        </Container>
    );
}

export default TopAppBar;