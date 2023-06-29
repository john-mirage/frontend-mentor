import GlobalStyle from "../../styles/global";
import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./app.style";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleDrawer, toggleLightbox } from "../../slices/app";

const App = () => {
  const { lightboxIsOpen, drawerIsOpen } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  const handleScrim = () => {
    if (drawerIsOpen) dispatch(toggleDrawer(false));
    if (lightboxIsOpen) dispatch(toggleLightbox(false));
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.Title>E-commerce product page</Styled.Title>
        <Styled.Container>
          <Styled.TopAppBar />
          <Styled.Gallery />
          <Styled.Product />
          <AnimatePresence>
            {lightboxIsOpen && (
              <Styled.Lightbox
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
              />
            )}
            {drawerIsOpen && (
              <Styled.Drawer
                key="drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", duration: 0.3 }}
              />
            )}
            {(lightboxIsOpen || drawerIsOpen) && (
              <Styled.Scrim
                key="scrim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                onClick={handleScrim}
              />
            )}
          </AnimatePresence>
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default App;
