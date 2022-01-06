import styled from "styled-components";
import TopAppBar from "@components/chatapp/TopAppBar";
import Feed from "@components/chatapp/Feed";

const Case = styled.article`
    position: relative;
    z-index: 20;
    margin-top: 9.6rem;
    width: 40rem;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    border-radius: 4.8rem;
    padding: 1.4rem;
`;

const Screen = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.secondaryLightGrayishViolet};
    border-radius: 3.8rem;
    overflow: hidden;
`;

const Gap = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 55%;
    height: 2.4rem;
    border-bottom-left-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    background-color: #fff;
`;

function Phone() {
    return (
        <Case>
            <Screen>
                <Gap />
                <TopAppBar />
                <Feed />
            </Screen>
        </Case>
    );
}

export default Phone;