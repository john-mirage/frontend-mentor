import styled from "styled-components";
import BaseMessage from "@components/solution/chat-app-css-illustration/message";
import BasePictures from "@components/solution/chat-app-css-illustration/pictures";
import BaseProposition from "@components/solution/chat-app-css-illustration/proposition";
import TextInput from "@components/solution/chat-app-css-illustration/text-input";

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

const Message = styled(BaseMessage)`
    align-self: ${props => props.recipient ? "flex-end" : "flex-start"};
    max-width: 60%;
    ${props => props.margin && 'margin-bottom: 1.5rem;'}
`;

const Pictures = styled(BasePictures)`
    align-self: ${props => props.recipient ? "flex-end" : "flex-start"};
    width: 70%;
    ${props => props.margin && 'margin-bottom: 1.5rem;'}
`;

const Proposition = styled(BaseProposition)`
    width: 70%;
    ${props => props.margin && 'margin-bottom: 1.5rem;'}
`;

function Chat() {
    return (
        <Container>
            <Section>
                <Message message="That sounds great. I'd be happy to discuss more." margin />
                <Message message="Could you send over some pictures of your dog, please?" />
            </Section>
            
            <Section>
                <Pictures margin recipient />
                <Message message="Here are a few pictures. She's an happy girl!" margin recipient />
                <Message message="Can you make it?" recipient />
            </Section>
            
            <Section>
                <Message message="She looks so happy! The we discussed works. How long shall i take her out for?" margin />
                <Proposition duration="30 minutes walk" price="$29" inputId="proposition-selector-1" margin />
                <Proposition duration="1 hour walk" price="$49" inputId="proposition-selector-2" />
            </Section>

            <TextInput />
        </Container>
    );
}

export default Chat;