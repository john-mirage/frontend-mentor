import Image from "next/image";
import styled from "styled-components";
import LeftArrowButton from "@components/chat-app-css-illustration/LeftArrowButton";
import MoreButton from "@components/chat-app-css-illustration/MoreButton";
import avatar from "@assets/chat-app-css-illustration/avatar.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    background: linear-gradient(to right, ${props => props.theme.gradientLightViolet}, ${props => props.theme.gradientLightMagenta});
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding-top: 5rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const Avatar = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    overflow: hidden;
    border: 0.2rem solid ${props => props.theme.secondaryWhite};
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
    color: ${props => props.theme.secondaryWhite};
`;

const State = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
`;

function Bar() {
    return (
        <Container>
            <LeftArrowButton />
            <Avatar>
                <Image src={avatar} layout="responsive"/>
            </Avatar>
            <Info>
                <Name>Samuel Green</Name>
                <State>Available to Walk</State>
            </Info>
            <MoreButton />
        </Container>
    );
}

export default Bar;