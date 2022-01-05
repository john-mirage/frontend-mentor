import styled from "styled-components";
import Phone from "@components/chatapp/Phone";

const Container = styled.main`
    position: relative;
    width: 100%;
    height: 150rem;
    overflow: hidden;
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
    background: linear-gradient(to bottom, ${props => props.theme.gradientLightMagenta}, ${props => props.theme.gradientLightViolet});
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
    background-color: ${props => props.theme.secondaryLightGrayishViolet};
`;

function Page() {
    return (
        <Container>
            <LeftShape />
            <RightShape />
            <Phone />
        </Container>
    );
}

export default Page;