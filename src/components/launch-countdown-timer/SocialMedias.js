import styled from "styled-components";
import facebookIcon from "@assets/launch-countdown-timer/icon-facebook.svg";
import pinterestIcon from "@assets/launch-countdown-timer/icon-pinterest.svg";
import instagramIcon from "@assets/launch-countdown-timer/icon-instagram.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 17rem;
    height: auto;
`;

const Icon = styled.img`
    width: 3rem;
    height: auto;
`;

function SocialMedias(props) {
    return (
        <Container className={props.className}>
            <Icon src={facebookIcon.src} />
            <Icon src={pinterestIcon.src} />
            <Icon src={instagramIcon.src} />
        </Container>
    );
}

export default SocialMedias;