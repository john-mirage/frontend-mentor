import styled from "styled-components";
import Dialog from "@components/order-summary/Dialog";
import patternDesktop from "@assets/order-summary/pattern-background-desktop.svg";
import patternMobile from "@assets/order-summary/pattern-background-mobile.svg";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5rem;
    background-color: ${props => props.theme.color.primary.paleBlue};
    background-image: url(${patternMobile.src});
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: top;

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