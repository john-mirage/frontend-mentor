import styled from "styled-components";
import IconButton from "@components/ecommerce-product-page/IconButton";
import menuIcon from "@assets/ecommerce-product-page/icon-menu.svg";
import cartIcon from "@assets/ecommerce-product-page/icon-cart.svg";
import avatar from "@assets/ecommerce-product-page/image-avatar.png";
import logo from "@assets/ecommerce-product-page/logo.svg";

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 7rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const MenuIcon = styled(IconButton)`
    margin-left: -1.6rem;
    margin-right: 0.4rem;
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
`;

function TopAppBar(props) {

    function handleMenu(event) {
        event.preventDefault();
        props.setDrawerIsOpen(true);
    }

    function handleCart(event) {
        event.preventDefault();
        if (props.cartIsOpen) {
            props.setCartIsOpen(false);
        } else {
            props.setCartIsOpen(true);
        }
    }

    return (
        <Container className={props.className}>
            <MenuIcon
                icon={menuIcon.src}
                iconSize="1.6rem"
                action={handleMenu}
            />
            <Logo
                src={logo.src}
            />
            <CartIcon
                icon={cartIcon.src}
                iconSize="2.4rem"
                action={handleCart}
            />
            <ProfileIcon
                icon={avatar.src}
                iconSize="2.4rem"
                isAvatar
            />
        </Container>
    );
}

export default TopAppBar;