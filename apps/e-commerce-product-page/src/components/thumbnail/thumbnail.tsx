import * as Styled from "./thumbnail.style";

interface ThumbnailProps {
  className?: string;
  thumbnail: string;
}

function Thumbnail({ className, thumbnail }: ThumbnailProps) {
  return (
    <Styled.Container className={className}>
      <Styled.Image src={thumbnail} alt="" />
      <Styled.Overlay />
    </Styled.Container>
  );
}

export default Thumbnail;
