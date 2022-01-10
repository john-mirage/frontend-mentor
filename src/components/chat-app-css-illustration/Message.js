import styled from "styled-components";

const Container = styled.p`
    width: auto;
    height: auto;
    padding: 1rem;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: ${props => props.recipient ? "0.6rem" : "1.6rem"};
    border-bottom-left-radius: ${props => props.recipient ? "1.6rem" : "0.6rem"};
    background-color: ${props => props.recipient ? "#fff" : "rgba(145, 65, 200, 0.08)"};
    color: ${props => props.recipient ? props.theme.color.primary.text.desaturatedDarkViolet : props.theme.color.primary.text.moderateViolet};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
`;

function Message(props) {
    return (
        <Container
            className={props.className}
            recipient={props.recipient}
        >
            {props.message}
        </Container>
    );
}

export default Message;