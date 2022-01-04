import styled from "styled-components";
import Dialog from "@components/ordersummary/Dialog";
import Order from "@components/ordersummary/Order";
import heroIllustration from "@assets/ordersummary/illustration-hero.svg";
import musicIcon from "@assets/ordersummary/icon-music.svg";
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
            <Dialog
                title="Order Summary"
                description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
                imageSrc={heroIllustration}
                imageAlt="Women listening and dancing to music with headphone"
                primaryAction="Proceed to Payment"
                secondaryAction="Cancel order"
            >
                <Order
                    plan="Annual Plan"
                    price="$59.99/year"
                    iconSrc={musicIcon}
                    iconAlt="An icon of a music note"
                    action="Change"
                />
            </Dialog>
        </Container>
    );
}

export default Page;