import styled from "styled-components";
import avatar from "@assets/solution/nft-preview-card/image-avatar.png";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Avatar = styled.img`
    flex: 0 0 3.5rem;
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-right: 2rem;
`;

const Text = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    color: ${props => props.theme.color.primary.softBlue};
`;

const Name = styled.a`
    display: inline;
    color: ${props => props.theme.color.neutral.white};
    transition-property: color;
    transition-duration: 300ms;

    &:hover {
        color: ${props => props.theme.color.primary.cyan};
    }
`;

function Author() {
    return (
        <Container>
            <Avatar
                src={avatar.src}
                alt="Jules Wyvern profile picture"
            />
            <Text>Creation of <Name>Jules Wyvern</Name></Text>
        </Container>
    );
}

export default Author;