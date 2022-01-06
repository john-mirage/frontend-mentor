import Image from "next/image";
import styled from "styled-components";
import ArrowIcon from "@components/chatapp/ArrowIcon";
import avatar from "@assets/chatapp/avatar.jpg";

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
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const Arrow = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 1.5rem;
`;

const ArrowElement = styled.div``;

const ArrowUpElement = styled(ArrowElement)``;

const ArrowDownElement = styled(ArrowElement)``;

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
    color: ${props => props.theme.secondaryVeryLightMagenta};
`;

const More = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
`;

const Dot = styled.div`
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryWhite};
`;

function TopAppBar() {
    return (
        <Container>
            <ArrowIcon
                size="2.4rem"
            />
            <Avatar>
                <Image
                    src={avatar}
                    layout="responsive"
                />
            </Avatar>
            <Info>
                <Name>Samuel Green</Name>
                <State>Available to Walk</State>
            </Info>
            <More>
                <Dot />
                <Dot />
                <Dot />
            </More>
        </Container>
    );
}

export default TopAppBar;