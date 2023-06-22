import * as Styled from "./thumbnail.style";

const overlayOnHover = {
  hover: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

interface ThumbnailProps {
  className?: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  action: () => void;
  isActive: boolean;
}

function Thumbnail({ className, thumbnail, action, isActive }: ThumbnailProps) {
  return (
    <Styled.Container className={className} onClick={action} whileHover="hover">
      <Styled.Background
        initial={false}
        animate={{ scale: isActive ? 1.05 : 0.8 }}
        transition={{ type: "spring", duration: 0.3 }}
      />
      <Styled.Image src={thumbnail.src} alt={thumbnail.alt} />
      <Styled.Overlay
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ type: "spring", duration: 0.3 }}
        variants={overlayOnHover}
      />
    </Styled.Container>
  );
}

export default Thumbnail;
