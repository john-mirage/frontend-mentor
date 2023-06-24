import { forwardRef } from "react";
import * as Styled from "./lightbox.style";
import Slider from "../slider";
import { useDispatch } from "react-redux";
import { toggleLightbox } from "../../slices/app";

interface LightboxProps {
  className?: string;
}

const Lightbox = forwardRef(({ className }: LightboxProps, ref) => {
  const dispatch = useDispatch();

  function handleLightbox() {
    dispatch(toggleLightbox(false));
  }

  return (
    <Styled.Container className={className} ref={ref}>
      <Styled.Dialog>
        <Styled.CloseButton action={handleLightbox}>
          <Styled.CloseIcon />
        </Styled.CloseButton>

        <Slider isLightbox={true} />
      </Styled.Dialog>
    </Styled.Container>
  );
});

export default Lightbox;
