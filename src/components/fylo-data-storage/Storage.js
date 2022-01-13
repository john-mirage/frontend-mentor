import styled from "styled-components";
import ProgressBar from "@components/fylo-data-storage/ProgressBar";
import RemainingData from "@components/fylo-data-storage/RemainingData";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    padding: 4rem;
    background-color: ${props => props.theme.color.neutral.darkBlue};
    border-radius: 1rem;

    @media screen and (min-width: 500px) {
        width: 45rem;
    }
`;

const Info = styled.h1`
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.color.neutral.paleBlue};
    margin-bottom: 2rem;

    @media screen and (min-width: 1280px) {
        text-align: start;
    }
`;

const UsedData = styled.span`
    font-weight: 700;
    text-transform: uppercase;
`;

const StyledProgressBar = styled(ProgressBar)`
    margin-bottom: 2rem;
`;

const StyledRemainingData = styled(RemainingData)`
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translate(50%, -50%);

    @media screen and (min-width: 1280px) {
        top: 0;
        right: 4rem;
        transform: translate(0, -60%);
    }
`;

function Storage(props) {
    return (
        <Container className={props.className}>
            <Info>
                You've used
                <UsedData> 815 gb </UsedData>
                of your storage
            </Info>
            <StyledProgressBar />
            <StyledRemainingData />
        </Container>
    );
}

export default Storage;