import styled from "styled-components";
import Message from "@components/chat-app-css-illustration/Message";
import Pictures from "@components/chat-app-css-illustration/Pictures";
import Proposition from "@components/chat-app-css-illustration/Proposition";
import TextInput from "@components/chat-app-css-illustration/TextInput";

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

const StyledMessage = styled(Message)`
    align-self: ${props => props.recipient ? "flex-end" : "flex-start"};
    max-width: 60%;
    ${props => props.margin && 'margin-bottom: 1.5rem;'}
`;

const StyledPictures = styled(Pictures)`
    align-self: ${props => props.recipient ? "flex-end" : "flex-start"};
    width: 70%;
    ${props => props.margin && 'margin-bottom: 1.5rem;'}
`;

const StyledProposition = styled(Proposition)`
    width: 70%;
    ${props => props.margin && 'margin-bottom: 1.5rem;'}
`;

function Chat() {
    return (
        <Container>
            <Section>
                <StyledMessage message="That sounds great. I'd be happy to discuss more." margin />
                <StyledMessage message="Could you send over some pictures of your dog, please?" />
            </Section>
            
            <Section>
                <StyledPictures margin recipient />
                <StyledMessage message="Here are a few pictures. She's an happy girl!" margin recipient />
                <StyledMessage message="Can you make it?" recipient />
            </Section>
            
            <Section>
                <StyledMessage message="She looks so happy! The we discussed works. How long shall i take her out for?" margin />
                <StyledProposition duration="30 minutes walk" price="$29" inputId="proposition-selector-1" margin />
                <StyledProposition duration="1 hour walk" price="$49" inputId="proposition-selector-2" />
            </Section>

            <TextInput />
        </Container>
    );
}

export default Chat;