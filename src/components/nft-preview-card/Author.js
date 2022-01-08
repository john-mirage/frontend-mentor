import Image from "next/image";
import styled from "styled-components";
import avatar from "@assets/nft-preview-card/image-avatar.png";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const AvatarContainer = styled.div`
    flex: 0 0 3.5rem;
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-right: 2rem;
`;

const TextContainer = styled.div`
    display: block;
    font-size: 1.8rem;
    font-weight: 300;
`;

const TextCreation = styled.span`
    color: ${props => props.theme.softBlue};
`;

const TextAuthor = styled.a`
    display: inline;
    color: ${props => props.theme.white};
    transition-property: color;
    transition-duration: 300ms;

    &:hover {
        color: ${props => props.theme.cyan};
    }
`;

function Author() {
    return (
        <Container>
            <AvatarContainer>
                <Image
                    src={avatar}
                    alt="Jules Wyvern profile picture"
                    width="35"
                    height="35"
                />
            </AvatarContainer>
            <TextContainer>
                <TextCreation>Creation of </TextCreation>
                <TextAuthor>Jules Wyvern</TextAuthor>
            </TextContainer>
        </Container>
    );
}

export default Author;