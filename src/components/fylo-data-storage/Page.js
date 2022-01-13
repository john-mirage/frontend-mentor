import styled from "styled-components";
import Navigation from "@components/fylo-data-storage/Navigation";
import Storage from "@components/fylo-data-storage/Storage";
import mobileBackground from "@assets/fylo-data-storage/bg-mobile.png";
import desktopBackground from "@assets/fylo-data-storage/bg-desktop.png";

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

    @media screen and (min-width: 1280px) {
        background-image: url(${desktopBackground.src});
        background-color: ${props => props.theme.color.neutral.veryDarkBlue};
        background-size: 100% 50%;
        background-position: left bottom;
        flex-direction: row;
    }
`;

const StyledNavigation = styled(Navigation)`
    margin-bottom: 2rem;

    @media screen and (min-width: 500px) {
        width: 45rem;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
        margin-right: 3rem;
    }
`;

const StyledStorage = styled(Storage)`
    margin-bottom: 4rem;

    @media screen and (min-width: 500px) {
        width: 45rem;
    }

    @media screen and (min-width: 1280px) {
        width: 60rem;
        margin-bottom: 0;
        margin-top: 3.8rem;
    }
`;

function Page() {
    return (
        <Container>
            <StyledNavigation />
            <StyledStorage />
        </Container>
    );
}

export default Page;