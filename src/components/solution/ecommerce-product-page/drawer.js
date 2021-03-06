import styled from "styled-components";
import BaseIconButton from "@components/solution/ecommerce-product-page/icon-button";
import BaseNavigation from "@components/solution/ecommerce-product-page/navigation";
import BaseCloseIcon from "@assets/solution/ecommerce-product-page/icon-close.svg?react";
import React from "react";

const Container = styled.aside`
    width: 20rem;
    height: 100%;
    background-color: ${props => props.theme.color.neutral.white};
`;

const CloseButton = styled(BaseIconButton)`
    margin-bottom: 1rem;
    transition: background-color 300ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const CloseIcon = styled(BaseCloseIcon)`
    width: 1.2rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.darkGrayishBlue};
`;

const Navigation = styled(BaseNavigation)`
    padding-left: 1.8rem;
`;

const Drawer = React.forwardRef(({ className, setDrawerIsOpen }, ref) => {

    function handleDrawer(event) {
        event.preventDefault();
        setDrawerIsOpen(false);
    }

    return (
        <Container className={className} ref={ref}>
            <CloseButton action={handleDrawer}>
                <CloseIcon />
            </CloseButton>
            <Navigation type="Drawer" />
        </Container>
    );
});

export default Drawer;