import * as Styled from "./drawer.style";
import React from "react";

const Drawer = React.forwardRef(({ className, setDrawerIsOpen }, ref) => {
  function handleDrawer(event) {
    event.preventDefault();
    setDrawerIsOpen(false);
  }

  return (
    <Styled.Container className={className} ref={ref}>
      <Styled.CloseButton action={handleDrawer}>
        <Styled.CloseIcon />
      </Styled.CloseButton>
      <Styled.Navigation type="Drawer" />
    </Styled.Container>
  );
});

export default Drawer;
