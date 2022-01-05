import styled from "styled-components";
import Dialog from "@components/faqaccordioncard/Dialog";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40% 2.4rem;
    background: linear-gradient(to bottom, ${props => props.theme.primaryGradientViolet}, ${props => props.theme.primaryGradientBlue});

    @media screen and (min-width: 748px) {
        padding: 24.4rem 2.4rem;
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