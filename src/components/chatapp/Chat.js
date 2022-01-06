import styled from "styled-components";
import Message from "@components/chatapp/Message";
import Pictures from "@components/chatapp/Pictures";
import Proposition from "@components/chatapp/Proposition";
import TextInput from "@components/chatapp/TextInput";

const Container = styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding: 1.6rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 2.8rem;
`;

const Element = styled.div`
    width: ${props => props.width ? props.width : "auto"};
    max-width: ${props => props.maxWidth ? props.maxWidth : "none"};
    align-self: ${props => props.right ? "flex-end" : "flex-start"};
    height: auto;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

function Chat() {
    return (
        <Container>
            <Section>
                <Element maxWidth="60%">
                    <Message message="That sounds great. I'd be happy to discuss more." />
                </Element>
                <Element maxWidth="60%">
                    <Message message="Could you send over some pictures of your dog, please?" />
                </Element>
            </Section>
            
            <Section>
                <Element right width="70%">
                    <Pictures />
                </Element>
                <Element right maxWidth="60%">
                    <Message right message="Here are a few pictures. She's an happy girl!" />
                </Element>
                <Element right maxWidth="60%">
                    <Message right message="Can you make it?" />
                </Element>
            </Section>
            
            <Section>
                <Element maxWidth="60%">
                    <Message message="She looks so happy! The we discussed works. How long shall i take her out for?" />
                </Element>
                <Element width="70%">
                    <Proposition duration="30 minutes walk" price="$29" inputId="proposition-selector-1" />
                </Element>
                <Element width="70%">
                    <Proposition duration="1 hour walk" price="$49" inputId="proposition-selector-2" />
                </Element>
            </Section>

            <TextInput />
        </Container>
    );
}

export default Chat;