import { createContext } from "react";

export const PageContext = createContext({
    drawerisOpen: false,
    setDrawerIsOpen: () => {},
    lightboxIsOpen: false,
    setLightboxIsOpen: () => {},
    cartItemsNumber: 0,
    setCartItemsNumber: () => {},
});