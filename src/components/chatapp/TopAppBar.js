import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 9.6rem;
    background: linear-gradient(to right, ${props => props.theme.gradientLightViolet}, ${props => props.theme.gradientLightMagenta});
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;

function TopAppBar() {
    return (
        <Container>

        </Container>
    );
}

export default TopAppBar;