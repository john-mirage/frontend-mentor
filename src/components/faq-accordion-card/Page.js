import styled from "styled-components";
import Dialog from "@components/faq-accordion-card/Dialog";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    background: linear-gradient(to bottom, ${props => props.theme.primaryGradientViolet}, ${props => props.theme.primaryGradientBlue});
`;

function Page() {
    return (
        <Container>
            <Dialog />
        </Container>
    );
}

export default Page;