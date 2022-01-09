import styled from "styled-components";
import Header from "@components/fylo-data-storage/Header";
import Storage from "@components/fylo-data-storage/Storage";
import mobileBackground from "@assets/fylo-data-storage/bg-mobile.png";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-image: url(${mobileBackground.src});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Body = styled.div`
    margin-top: 2rem;
`;

function Page() {
    return (
        <Container>
            <Header />
            <Body>
                <Storage />
            </Body>
        </Container>
    );
}

export default Page;