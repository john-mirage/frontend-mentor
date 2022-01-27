import styled, { css } from "styled-components";
import BaseFaceBookIcon from "@assets/launch-countdown-timer/icon-facebook.svg?react";
import BasePinterestIcon from "@assets/launch-countdown-timer/icon-pinterest.svg?react";
import BaseInstagramIcon from "@assets/launch-countdown-timer/icon-instagram.svg?react";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    height: auto;
`;

const Link = styled.a`
    margin-right: 3rem;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }
`;

const iconStyle = css`
    width: 2.4rem;
    height: auto;
    fill: ${props => props.theme.color.primary.grayishBlue};
    transition: fill 300ms;

    &:hover {
        fill: ${props => props.theme.color.primary.softRed};
    }
`;

const FaceBookIcon = styled(BaseFaceBookIcon)`
    ${iconStyle}
`;

const PinterestIcon = styled(BasePinterestIcon)`
    ${iconStyle}
`;

const InstagramIcon = styled(BaseInstagramIcon)`
    ${iconStyle}
`;

function SocialMedias(props) {
    return (
        <Container className={props.className}>
            <Link href="#">
                <FaceBookIcon />
            </Link>
            <Link href="#">
                <PinterestIcon />
            </Link>
            <Link href="#">
                <InstagramIcon />
            </Link>
        </Container>
    );
}

export default SocialMedias;