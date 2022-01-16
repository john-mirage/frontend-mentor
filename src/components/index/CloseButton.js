import styled from "styled-components";

const Container = styled.label`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    height: 4rem;
    justify-content: center;
    min-width: 4.8rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
`;

const Text = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.color.primary.purple};
`;
function CloseButton(props) {
    return (
        <Container htmlFor={props.inputId}>
            <Text>{props.label}</Text>
        </Container>
    );
}

export default CloseButton;