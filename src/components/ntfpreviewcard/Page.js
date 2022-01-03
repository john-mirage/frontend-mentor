import styled from "styled-components";
import Card from "@components/ntfpreviewcard/Card";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.4rem;
    background-color: ${props => props.theme.backgroundMain};
`;

function Page() {
    return (
        <Container>
            <Card />
        </Container>
    );
}

export default Page;