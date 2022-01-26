import styled from 'styled-components';
import profilePicture from "@assets/ecommerce-product-page/image-avatar.png";

const Container = styled.button`
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Image = styled.img`
    margin: auto;
    width: 2.6rem;
    height: 2.6rem;
`;

function Profile(props) {
    return (
        <Container className={props.className}>
            <Image src={profilePicture.src} alt="Profile picture" />
        </Container>
    );
}

export default Profile;