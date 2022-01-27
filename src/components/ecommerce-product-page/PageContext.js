import { createContext } from "react";

export const PageContext = createContext({
    drawerIsOpen: false,
    setDrawerIsOpen: () => {},
    lightboxIsOpen: false,
    setLightboxIsOpen: () => {},
    cartItemsNumber: 0,
    setCartItemsNumber: () => {},
});