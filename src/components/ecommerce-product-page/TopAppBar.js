import styled, { keyframes, useTheme } from "styled-components";
import { useState } from "react";
import IconButton from "@components/ecommerce-product-page/IconButton";
import ProfileButton from "@components/ecommerce-product-page/ProfileButton";
import Cart from "@components/ecommerce-product-page/Cart";
import Navigation from "@components/ecommerce-product-page/Navigation";
import MenuIcon from "@assets/ecommerce-product-page/icon-menu.svg?react";
import LogoImage from "@assets/ecommerce-product-page/logo.svg?react";
import CartIcon from "@assets/ecommerce-product-page/icon-cart.svg?react";


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

const Logo = styled(LogoImage)`
    @media screen and (min-width: 900px) {
        margin-right: 6rem;
    }
`;

const MenuButton = styled(IconButton)`
    margin-left: -1.6rem;
    margin-right: 0.4rem;

    @media screen and (min-width: 900px) {
        display: none;
    }
`;

const CartButton = styled(IconButton)`
    margin-left: auto;
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
    right: 50%;
    transform: translateX(50%);
    width: calc(100% - 2rem);
    transition-property: visibility, opacity;
    transition-duration: 300ms;

    @media screen and (min-width: 520px) {
        right: 1rem;
        width: 50rem;
        transform: translateX(0);
    }

    @media screen and (min-width: 900px) {
        top: 11rem;
    }
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
    const theme = useTheme();


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
            <MenuButton action={handleMenu}>
                <MenuIcon width="1.4rem" fill={theme.color.neutral.veryDarkBlue} />
            </MenuButton>

            <Logo height="2rem" fill={theme.color.neutral.veryDarkBlue} />

            <DesktopNavigation type="TopAppBar" />

            <CartButton action={handleCart}>
                <CartIcon width="2rem" fill={theme.color.neutral.veryDarkBlue} />
                {props.cartItemsNumber > 0 &&
                    <Badge key={props.cartItemsNumber}>{props.cartItemsNumber}</Badge>
                }
            </CartButton>

            <ProfileButton />

            <FixedCart
                cartIsOpen={cartIsOpen}
                cartItemsNumber={props.cartItemsNumber}
                setCartItemsNumber={props.setCartItemsNumber}
            />
        </Container>
    );
}

export default TopAppBar;