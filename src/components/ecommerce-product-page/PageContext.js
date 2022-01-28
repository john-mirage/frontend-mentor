import { createContext } from "react";

export const PageContext = createContext({
    drawerIsOpen: false,
    setDrawerIsOpen: () => {},
    lightboxIsOpen: false,
    setLightboxIsOpen: () => {},
    cartIsOpen: false,
    setCartIsOpen: () => {},
    cartItemsNumber: 0,
    setCartItemsNumber: () => {},
});