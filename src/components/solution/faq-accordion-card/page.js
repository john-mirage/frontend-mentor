import styled from "styled-components";
import Dialog from "@components/solution/faq-accordion-card/dialog";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    background: ${props => props.theme.color.primary.gradient};
`;

function Page() {
    return (
        <Container>
            <Dialog />
        </Container>
    );
}

export default Page;