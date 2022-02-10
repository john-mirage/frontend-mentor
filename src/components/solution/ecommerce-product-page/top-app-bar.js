import styled from "styled-components";
import Tippy from "@tippyjs/react/headless";
import IconButton from "@components/solution/ecommerce-product-page/icon-button";
import ProfileButton from "@components/solution/ecommerce-product-page/profile-button";
import Cart from "@components/solution/ecommerce-product-page/cart";
import BaseNavigation from "@components/solution/ecommerce-product-page/navigation";
import BaseBadge from "@components/solution/ecommerce-product-page/badge";
import BaseMenuIcon from "@assets/solution/ecommerce-product-page/icon-menu.svg?react";
import BaseLogo from "@assets/solution/ecommerce-product-page/logo.svg?react";
import BaseCartIcon from "@assets/solution/ecommerce-product-page/icon-cart.svg?react";
import { AnimatePresence, motion, useSpring } from "framer-motion";

const badgeAnimations = {
    bounce: {
        scale: [1, 1.3, 1, 1.3, 1],
        transition: {
            duration: 1.3,
            times: [0, 0.14, 0.28, 0.42, 0.7],
        },
    },
    hidden: {
        scale: 0,
        transition: {
            duration: 0.3,
        },
    },
}

const Container = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: ${props => props.theme.color.neutral.white};

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        height: 12rem;
    }
`;

const Logo = styled(BaseLogo)`
    height: 2rem;
    fill: ${props => props.theme.color.neutral.veryDarkBlue};

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        margin-right: 6rem;
    }
`;

const MenuButton = styled(IconButton)`
    margin-left: -1.6rem;
    margin-right: 0.4rem;

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
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
    
    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        margin-right: 2.5rem;
    }
`;

const CartIcon = styled(BaseCartIcon)`
    width: 2rem;
    fill: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const Navigation = styled(BaseNavigation)`
    display: none;

    @media screen and (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
    }
`;

const Badge = styled(motion(BaseBadge))`
    position: absolute;
    top: 0.6rem;
    right: 0.4rem;
`;

function TopAppBar({ className, cartIsOpen, cartItemsNumber, setDrawerIsOpen, setCartIsOpen, setCartItemsNumber }) {
    const springConfig = { damping: 15, stiffness: 300 };
    const opacity = useSpring(0, springConfig);
    const y = useSpring(-20, springConfig);

    function handleMenu(event) {
        event.preventDefault();
        setDrawerIsOpen(true);
    }

    function handleCart(event) {
        event.preventDefault();
        setCartIsOpen(!cartIsOpen);
    }

    function onCartMount() {
        opacity.set(1);
        y.set(0);
    }

    function onCartHide({ unmount }) {
        const cleanup = opacity.onChange(value => {
            if (value <= 0) {
                cleanup();
                unmount();
            }
        });

        opacity.set(0);
        y.set(-20);
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
                        opacity={opacity}
                        y={y}
                        cartItemsNumber={cartItemsNumber}
                        setCartItemsNumber={setCartItemsNumber}
                        tippyAttrs={attrs}
                    />
                )}
                interactive={true}
                visible={cartIsOpen}
                onClickOutside={() => setCartIsOpen(false)}
                appendTo="parent"
                animation={true}
                onMount={onCartMount}
                onHide={onCartHide}
                popperOptions={{
                    modifiers: [
                        {
                            name: 'RootCustomStyle',
                            enabled: true,
                            phase: 'write',
                            fn({ state }) {
                                state.elements.popper.style.maxWidth = "40rem";
                                state.elements.popper.style.width = "calc(100% - 1rem)";
                            }
                        },
                    ]
                }}
            >
                <CartButton action={handleCart}>
                    <CartIcon />
                    <AnimatePresence>
                        {cartItemsNumber > 0 &&
                            <Badge
                                variants={badgeAnimations}
                                animate="bounce"
                                exit="hidden"
                            >
                                {cartItemsNumber}
                            </Badge>
                        }
                    </AnimatePresence>
                </CartButton>
            </Tippy>

            <ProfileButton />
        </Container>
    );
}

export default TopAppBar;