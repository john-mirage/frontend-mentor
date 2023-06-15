import * as Styled from "./avatar.style";

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
}

const Avatar = ({ className, src, alt }: AvatarProps) => {
  return <Styled.Image className={className} src={src} alt={alt} draggable="false" />;
};

export default Avatar;
