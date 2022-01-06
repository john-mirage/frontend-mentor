import styled from "styled-components";

const Container = styled.p`
    width: 100%;
    height: auto;
    padding: 1rem;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: ${props => props.right ? "0.6rem" : "1.6rem"};
    border-bottom-left-radius: ${props => props.right ? "1.6rem" : "0.6rem"};
    background-color: ${props => props.right ? "#fff" : "rgba(145, 65, 200, 0.08)"};
    color: ${props => props.right ? props.theme.textDesaturatedDarkViolet : props.theme.textModerateViolet};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
`;

function Message(props) {
    return (
        <Container right={props.right}>
            {props.message}
        </Container>
    );
}

export default Message;