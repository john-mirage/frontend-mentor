import styled from "styled-components";
import closeIcon from "@assets/ecommerce-product-page/icon-close.svg";
import Navigation from "@components/ecommerce-product-page/Navigation";

const Container = styled.aside`
    width: 20rem;
    height: 100%;
    background-color: ${props => props.theme.color.neutral.white};
    padding-left: 1.8rem;
`;

const CloseButton = styled.button`
    width: 4.8rem;
    height: 4.8rem;
    background-image: url(${closeIcon.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.2rem;
    margin-left: -1.8rem;
`;

function Drawer(props) {
    function handleDrawer(event) {
        event.preventDefault();
        props.setDrawerIsOpen(false);
    }

    return (
        <Container className={props.className}>
            <CloseButton onClick={handleDrawer} />
            <Navigation type="Drawer" />
        </Container>
    );
}

export default Drawer;