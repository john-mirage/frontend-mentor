import styled from "styled-components";
import Pictures from "@components/chatapp/Pictures";
import Proposition from "@components/chatapp/Proposition";

const Container = styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding-top: 1.6rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 2.8rem;
`;

const Message = styled.p`
    align-self: ${props => props.right ? "flex-end" : "flex-start"};
    padding: 1rem;
    max-width: 60%;
    height: auto;
    margin-bottom: 1.4rem;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: ${props => props.right ? "0.6rem" : "1.6rem"};
    border-bottom-left-radius: ${props => props.right ? "1.6rem" : "0.6rem"};
    background-color: ${props => props.right ? "#fff" : "rgba(145, 65, 200, 0.08)"};
    color: ${props => props.right ? props.theme.textDesaturatedDarkViolet : props.theme.textModerateViolet};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

function Feed() {
    return (
        <Container>
            <Section>
                <Message>That sounds great. I'd be happy to discuss more.</Message>
                <Message>Could you send over some pictures of your dog, please?</Message>
            </Section>
            
            <Section>
                <Pictures />
                <Message right>Here are a few pictures. She's an happy girl!</Message>
                <Message right>Can you make it?</Message>
            </Section>
            
            <Section>
                <Message>She looks so happy! The we discussed works. How long shall i take her out for?</Message>
                <Proposition duration="30 minutes walk" price="$29" inputId="proposition-selector-1" />
                <Proposition duration="1 hour walk" price="$49" inputId="proposition-selector-2" />
            </Section>
        </Container>
    );
}

export default Feed;