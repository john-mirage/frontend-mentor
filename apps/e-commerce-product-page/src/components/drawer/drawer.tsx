import * as Styled from "./drawer.style";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../slices/app";
import Navigation from "../navigation";

interface DrawerProps {
  className?: string;
}

const Drawer = React.forwardRef(({ className }: DrawerProps, ref) => {
  const dispatch = useDispatch();

  function handleDrawer() {
    dispatch(toggleDrawer(false));
  }

  return (
    <Styled.Container className={className} ref={ref}>
      <Styled.CloseButton action={handleDrawer}>
        <Styled.CloseIcon />
      </Styled.CloseButton>
      <Navigation isTopAppBar={false} />
    </Styled.Container>
  );
});

export default Drawer;
