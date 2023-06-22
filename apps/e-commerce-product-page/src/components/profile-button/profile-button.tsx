import * as Styled from "./profile-button.style";
import profilePicture from "../../images/image-avatar.png";

interface ProfileButtonProps {
  className?: string;
}

function ProfileButton({ className }: ProfileButtonProps) {
  return (
    <Styled.Container className={className}>
      <Styled.Image src={profilePicture} alt="Profile picture" />
    </Styled.Container>
  );
}

export default ProfileButton;
