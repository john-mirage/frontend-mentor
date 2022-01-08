import styled from "styled-components";
import Bar from "@components/chatapp/Bar";
import Chat from "@components/chatapp/Chat";

const Screen = styled.article`
    position: relative;
    z-index: 20;
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    border-radius: 4.8rem;
    padding: 1.4rem;

    @media screen and (min-width: 452px) {
        width: 42rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const App = styled.div`
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
    height: 3rem;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    background-color: #fff;
`;

function Phone() {
    return (
        <Screen>
            <App>
                <Gap />
                <Bar />
                <Chat />
            </App>
        </Screen>
    );
}

export default Phone;