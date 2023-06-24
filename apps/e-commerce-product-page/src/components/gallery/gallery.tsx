import * as Styled from "./gallery.style";
import Slider from "../slider";
import { useDispatch } from "react-redux";
import { toggleLightbox } from "../../slices/app";

interface GalleryProps {
  className?: string;
}

const Gallery = ({ className }: GalleryProps) => {
  const dispatch = useDispatch();

  function handleLightbox() {
    if (window.matchMedia("(min-width: 576px)").matches) {
      dispatch(toggleLightbox(true));
    }
  }

  return (
    <Styled.Container className={className}>
      <Slider isLightbox={false} action={handleLightbox} />
    </Styled.Container>
  );
};

export default Gallery;
