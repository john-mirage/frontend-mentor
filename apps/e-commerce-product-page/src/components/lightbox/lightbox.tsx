import { forwardRef } from "react";
import * as Styled from "./lightbox.style";
import Slider from "../slider";

interface LightboxProps {
  className?: string;
}

const Lightbox = forwardRef(({ className }: LightboxProps, ref) => {
  return (
    <Styled.Container className={className} ref={ref}>
      <Styled.Dialog>
        <Styled.CloseButton>
          <Styled.CloseIcon />
        </Styled.CloseButton>

        <Slider />
      </Styled.Dialog>
    </Styled.Container>
  );
});

export default Lightbox;
