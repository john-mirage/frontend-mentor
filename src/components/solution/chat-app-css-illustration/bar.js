import styled from "styled-components";
import LeftArrowButton from "@components/solution/chat-app-css-illustration/left-arrow-button";
import MoreButton from "@components/solution/chat-app-css-illustration/more-button";
import avatar from "@assets/solution/chat-app-css-illustration/avatar.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    background: ${props => props.theme.color.primary.gradient.magentaToVioletHorizontal};
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding-top: 5rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const Avatar = styled.img`
    flex-grow: 0;
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-left: 0.4rem;
    margin-right: 1.5rem;
    overflow: hidden;
    border: 0.2rem solid ${props => props.theme.color.secondary.white};
`;

const Info = styled.div`
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Name = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.color.secondary.white};
`;

const State = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
`;

function Bar() {
    return (
        <Container>
            <LeftArrowButton />
            <Avatar
                src={avatar.src}
            />
            <Info>
                <Name>Samuel Green</Name>
                <State>Available to Walk</State>
            </Info>
            <MoreButton />
        </Container>
    );
}

export default Bar;