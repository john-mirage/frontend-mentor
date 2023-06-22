import * as Styled from "./drawer.style";
import React from "react";

interface DrawerProps {
  className?: string;
  setDrawerIsOpen: (drawerIsOpen: boolean) => void;
}

const Drawer = React.forwardRef(
  ({ className, setDrawerIsOpen }: DrawerProps, ref) => {
    function handleDrawer() {
      setDrawerIsOpen(false);
    }

    return (
      <Styled.Container className={className} ref={ref}>
        <Styled.CloseButton action={handleDrawer}>
          <Styled.CloseIcon />
        </Styled.CloseButton>
        <Styled.Navigation isTopAppBar={false} />
      </Styled.Container>
    );
  }
);

export default Drawer;
