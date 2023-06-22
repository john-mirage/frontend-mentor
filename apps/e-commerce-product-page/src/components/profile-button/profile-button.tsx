import * as Styled from "./profile-button.style";
import profilePicture from "@assets/solution/ecommerce-product-page/image-avatar.png";

function ProfileButton({ className }) {
  return (
    <Container className={className}>
      <Image src={profilePicture.src} alt="Profile picture" />
    </Container>
  );
}

export default ProfileButton;
