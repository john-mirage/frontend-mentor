import styled from "styled-components";
import Dialog from "@components/ordersummary/Dialog";
import Order from "@components/ordersummary/Order";

const Container = styled.main`
    font-family: 'Red Hat Display', sans-serif;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5rem;
    background-color: ${props => props.theme.paleBlue};
    background-image: url("./assets/ordersummary/pattern-background-mobile.svg");
    background-repeat: no-repeat;
    background-size: 100% 50%;

    @media screen and (min-width: 532px) {
        background-image: url("./assets/ordersummary/pattern-background-desktop.svg");
    }
`;

function Page() {
    return (
        <Container>
            <Dialog
                title="Order Summary"
                description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
                imageSrc="./assets/ordersummary/illustration-hero.svg"
                imageAlt="Women listening and dancing to music with headphone"
                primaryAction="Proceed to Payment"
                secondaryAction="Cancel order"
            >
                <Order
                    plan="Annual Plan"
                    price="$59.99/year"
                    iconSrc="./assets/ordersummary/icon-music.svg"
                    iconAlt="An icon of a music note"
                    action="Change"
                />
            </Dialog>
        </Container>
    );
}

export default Page;