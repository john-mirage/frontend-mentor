import * as Styled from "./top-app-bar.style";
import Cart from "../cart";
import { AnimatePresence, useAnimation, useSpring } from "framer-motion";
import { useEffect } from "react";

interface TopAppBarProps {
  className?: string;
  cartIsOpen: boolean;
  cartItemsNumber: number;
  setDrawerIsOpen: (drawerIsOpen: boolean) => void;
  setCartIsOpen: (cartIsOpen: boolean) => void;
  setCartItemsNumber: (cartItemsNumber: number) => void;
}

const TopAppBar = ({
  className,
  cartIsOpen,
  cartItemsNumber,
  setDrawerIsOpen,
  setCartIsOpen,
  setCartItemsNumber,
}: TopAppBarProps) => {
  const springConfig = { damping: 15, stiffness: 300 };
  const opacity = useSpring(0, springConfig);
  const y = useSpring(-20, springConfig);
  const badgeMotionControls = useAnimation();

  function handleMenu() {
    setDrawerIsOpen(true);
  }

  function handleCart() {
    setCartIsOpen(!cartIsOpen);
  }

  function onCartMount() {
    opacity.set(1);
    y.set(0);
  }

  function onCartHide({ unmount }: { unmount: () => void }) {
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
  }, [cartItemsNumber, badgeMotionControls]);

  return (
    <Styled.Container className={className}>
      <Styled.MenuButton action={handleMenu}>
        <Styled.MenuIcon />
      </Styled.MenuButton>

      <Styled.Logo />

      <Styled.Navigation isTopAppBar={true} />

      <Styled.ProfileButton />
    </Styled.Container>
  );
};

export default TopAppBar;

/*
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
  <Styled.CartButton action={handleCart}>
    <Styled.CartIcon />
    <AnimatePresence>
      {cartItemsNumber > 0 && (
        <Styled.Badge
          key="cart-badge"
          animate={badgeMotionControls}
          exit={{ scale: 0 }}
        >
          {cartItemsNumber}
        </Styled.Badge>
      )}
    </AnimatePresence>
  </Styled.CartButton>
</Tippy>
*/