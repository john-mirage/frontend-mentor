import styled from "styled-components";
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

const IconButton = styled.button`
    display: block;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const MobileMenu = styled(IconButton)`
    margin-left: -1.6rem;
    margin-right: 0.4rem;
    background-image: url(${menuIcon.src});
    background-size: 1.6rem 1.5rem;
`;

const Cart = styled(IconButton)`
    margin-left: auto;
    background-image: url(${cartIcon.src});
    background-size: 2.2rem 2rem;
`;

const Avatar = styled(IconButton)`
    margin-right: -1.2rem;
    background-image: url(${avatar.src});
    background-size: 2.4rem;
`;

const Logo = styled.img`
    width: auto;
    height: 2rem;
`;

function TopAppBar(props) {
    return (
        <Container className={props.className}>
            <MobileMenu onClick={() => props.setDrawerIsOpen(true)} />
            <Logo src={logo.src} />
            <Cart onClick={() => props.cartIsOpen ? props.setCartIsOpen(false) : props.setCartIsOpen(true)} />
            <Avatar />
        </Container>
    );
}

export default TopAppBar;