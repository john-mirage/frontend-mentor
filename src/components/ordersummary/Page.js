import styled from "styled-components";
import Dialog from "@components/ordersummary/Dialog";
import patternDesktop from "@assets/ordersummary/pattern-background-desktop.svg";
import patternMobile from "@assets/ordersummary/pattern-background-mobile.svg";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5rem;
    background-color: ${props => props.theme.paleBlue};
    background-image: url(${patternMobile.src});
    background-repeat: no-repeat;
    background-size: 100% 50%;

    @media screen and (min-width: 532px) {
        background-image: url(${patternDesktop.src});
    }
`;

function Page() {
    return (
        <Container>
            <Dialog />
        </Container>
    );
}

export default Page;