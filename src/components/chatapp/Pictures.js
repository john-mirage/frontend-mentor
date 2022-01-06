import Image from "next/image";
import styled from "styled-components";
import dogPicture1 from "@assets/chatapp/dog-image-1.jpg";
import dogPicture2 from "@assets/chatapp/dog-image-2.jpg";
import dogPicture3 from "@assets/chatapp/dog-image-3.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: -1.4rem;
`;

const ImageContainer = styled.div`
    width: calc((100% / 3) - 1.4rem);
    margin-right: 1.4rem;
    margin-bottom: 1.2rem;
    border-radius: 1.6rem;
    overflow: hidden;
`;

function Pictures() {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={dogPicture1}
                    layout="responsive"
                />
            </ImageContainer>
            <ImageContainer>
                <Image
                    src={dogPicture2}
                    layout="responsive"
                />
            </ImageContainer>
            <ImageContainer>
                <Image
                    src={dogPicture3}
                    layout="responsive"
                />
            </ImageContainer>
        </Container>
    );
}

export default Pictures;