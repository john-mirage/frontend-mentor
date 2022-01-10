import styled from "styled-components";
import Phone from "@components/chat-app-css-illustration/Phone";
import Hero from "@components/chat-app-css-illustration/Hero";

const Container = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    padding: 9.6rem 2rem;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
        justify-content: center;
        padding: 6rem 0;
    }
`;

const LeftShape = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 200%;
    height: 55%;
    transform: translateX(-75%);
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background: ${props => props.theme.color.primary.gradient.magentaToVioletVertical};

    @media screen and (min-width: 1280px) {
        width: 20%;
        height: 80%;
        transform: translateX(-10%);
        border-bottom-right-radius: 50% 10%;
        border-bottom-left-radius: 50% 10%;
    }
`;

const RightShape = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 200%;
    height: 55%;
    transform: translateX(75%);
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    background-color: ${props => props.theme.color.secondary.lightGrayishViolet};
`;

const StyledPhone = styled(Phone)`
    z-index: 20;
    margin-bottom: 6.4rem;

    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
        margin-right: 5%;
    }
`;

const StyledHero = styled(Hero)`
    z-index: 20;

    @media screen and (min-width: 1280px) {
        margin-left: 5%;
    }
`;

function Page() {
    return (
        <Container>
            <LeftShape />
            <RightShape />
            <StyledPhone />
            <StyledHero />
        </Container>
    );
}

export default Page;