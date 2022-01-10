import styled from "styled-components";
import Navigation from "@components/fylo-data-storage/Navigation";
import Storage from "@components/fylo-data-storage/Storage";
import mobileBackground from "@assets/fylo-data-storage/bg-mobile.png";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 2.5rem;
    background-image: url(${mobileBackground.src});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Content = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 4rem;
    
    @media screen and (min-width: 500px) {
        width: 45rem;
    }
`;

const StyledNavigation = styled(Navigation)`
    margin-bottom: 2rem;
`;

function Page() {
    return (
        <Container>
            <Content>
                <StyledNavigation />
                <Storage />
            </Content>
        </Container>
    );
}

export default Page;