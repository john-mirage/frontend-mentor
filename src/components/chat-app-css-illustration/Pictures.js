import styled from "styled-components";
import dogPicture1 from "@assets/chat-app-css-illustration/dog-image-1.jpg";
import dogPicture2 from "@assets/chat-app-css-illustration/dog-image-2.jpg";
import dogPicture3 from "@assets/chat-app-css-illustration/dog-image-3.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`;

const Picture = styled.img`
    flex: 1 1 0;
    margin-right: 5%;
    border-radius: 20%;
    overflow: hidden;

    &:last-child {
        margin-right: 0;
    }
`;

function Pictures(props) {
    return (
        <Container className={props.className}>
            <Picture src={dogPicture1.src} />
            <Picture src={dogPicture2.src} />
            <Picture src={dogPicture3.src} />
        </Container>
    );
}

export default Pictures;