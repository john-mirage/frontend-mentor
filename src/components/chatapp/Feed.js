import styled from "styled-components";
import Proposition from "@components/chatapp/Proposition";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 1.6rem;
`;

const Message = styled.p`
    padding: 1rem;
    max-width: 60%;
    height: auto;
    margin: ${props => props.right ? "0 0 1.6rem auto" : "0 auto 1.6rem 0"};
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

function Feed() {
    return (
        <Container>
            <Message>That sounds great. I'd be happy to discuss more.</Message>
            <Message>Could you send over some pictures of your dog, please?</Message>
            <Message right>Here are a few pictures. She's an happy girl!</Message>
            <Message right>Can you make it?</Message>
            <Message>She looks so happy! The we discussed works. How long shall i take her out for?</Message>
            <Proposition duration="30 minutes walk" price="$29" />
            <Proposition duration="1 hour walk" price="$49" />
        </Container>
    );
}

export default Feed;