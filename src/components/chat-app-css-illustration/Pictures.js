import styled from "styled-components";
import dogPicture1 from "@assets/chat-app-css-illustration/dog-image-1.jpg";
import dogPicture2 from "@assets/chat-app-css-illustration/dog-image-2.jpg";
import dogPicture3 from "@assets/chat-app-css-illustration/dog-image-3.jpg";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
    width: 100%;
    height: auto;
`;

const Picture = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20%;
    overflow: hidden;
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