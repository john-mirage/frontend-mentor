import styled from "styled-components";
import Dialog from "@components/solution/order-summary/dialog";
import patternDesktop from "@assets/solution/order-summary/pattern-background-desktop.svg";
import patternMobile from "@assets/solution/order-summary/pattern-background-mobile.svg";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5rem;
    background-color: ${props => props.theme.color.primary.paleBlue};
    background-image: url(${patternMobile});
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: top;

    @media screen and (min-width: 532px) {
        background-image: url(${patternDesktop});
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