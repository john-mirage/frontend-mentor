import * as Styled from "./gallery.style";
import Slider from "../slider";

interface GalleryProps {
  className?: string;
}

const Gallery = ({ className }: GalleryProps) => {
  return (
    <Styled.Container className={className}>
      <Slider />
    </Styled.Container>
  );
};

export default Gallery;
