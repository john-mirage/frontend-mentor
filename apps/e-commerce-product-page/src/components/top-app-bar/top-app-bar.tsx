import * as Styled from "./top-app-bar.style";
import Cart from "../cart";
import { AnimatePresence, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useFloating, autoUpdate, shift, offset } from "@floating-ui/react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleCart, toggleDrawer } from "../../slices/app";

interface TopAppBarProps {
  className?: string;
}

const TopAppBar = ({ className }: TopAppBarProps) => {
  const { cartIsOpen } = useSelector((state: RootState) => state.app);
  const { cartItemsNumber } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const badgeMotionControls = useAnimation();
  const { refs, floatingStyles } = useFloating({
    open: cartIsOpen,
    onOpenChange: (open) => dispatch(toggleCart(open)),
    whileElementsMounted: autoUpdate,
    middleware: [shift(), offset({ crossAxis: -7 })],
  });

  function handleCart() {
    dispatch(toggleCart(!cartIsOpen));
  }

  function handleMenu() {
    dispatch(toggleDrawer(true));
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
      <Styled.LeftSection>
        <Styled.MenuButton action={handleMenu}>
          <Styled.MenuIcon />
        </Styled.MenuButton>
        <Styled.Logo />
        <Styled.Navigation isTopAppBar={true} />
      </Styled.LeftSection>
      <Styled.RightSection>
        <Styled.CartButton ref={refs.setReference} action={handleCart}>
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
        {cartIsOpen && <Cart ref={refs.setFloating} style={floatingStyles} />}
        <Styled.ProfileButton />
      </Styled.RightSection>
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
