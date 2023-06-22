import * as Styled from "./top-app-bar.style";
import Cart from "../cart";
import { AnimatePresence, useAnimation, useSpring } from "framer-motion";
import { useEffect } from "react";

function TopAppBar({
  className,
  cartIsOpen,
  cartItemsNumber,
  setDrawerIsOpen,
  setCartIsOpen,
  setCartItemsNumber,
}) {
  const springConfig = { damping: 15, stiffness: 300 };
  const opacity = useSpring(0, springConfig);
  const y = useSpring(-20, springConfig);
  const badgeMotionControls = useAnimation();

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
    const cleanup = opacity.onChange((value) => {
      if (value <= 0) {
        cleanup();
        unmount();
      }
    });
    opacity.set(0);
    y.set(-20);
  }

  useEffect(() => {
    if (cartItemsNumber > 0) {
      badgeMotionControls.start({
        scale: [1, 1.3, 1, 1.3, 1],
        transition: {
          duration: 1.3,
          times: [0, 0.14, 0.28, 0.42, 0.7],
        },
      });
    }
  }, [cartItemsNumber]);

  return (
    <Container className={className}>
      <MenuButton action={handleMenu}>
        <MenuIcon />
      </MenuButton>

      <Logo />

      <Navigation type="TopAppBar" />

      <Tippy
        render={(attrs) => (
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
        placement="bottom"
        popperOptions={{
          modifiers: [
            {
              name: "RootCustomStyle",
              enabled: true,
              phase: "write",
              fn({ state }) {
                state.elements.popper.style.maxWidth = "40rem";
                state.elements.popper.style.width = "calc(100% - 1rem)";
              },
            },
          ],
        }}
      >
        <CartButton action={handleCart}>
          <CartIcon />
          <AnimatePresence>
            {cartItemsNumber > 0 && (
              <Badge
                key="cart-badge"
                animate={badgeMotionControls}
                exit={{ scale: 0 }}
              >
                {cartItemsNumber}
              </Badge>
            )}
          </AnimatePresence>
        </CartButton>
      </Tippy>

      <ProfileButton />
    </Container>
  );
}

export default TopAppBar;
