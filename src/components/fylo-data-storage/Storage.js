import styled from "styled-components";
import ProgressBar from "@components/fylo-data-storage/ProgressBar";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    padding: 4rem 4rem 6rem 4rem;
    background-color: ${props => props.theme.darkBlue};
    border-radius: 1rem;
`;

const Info = styled.h1`
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.paleBlue};
    margin-bottom: 2rem;
`;

const UsedData = styled.span`
    font-weight: 700;
    text-transform: uppercase;
`;

const Surface = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translate(-50%, 50%);
    width: auto;
    height: 8rem;
    padding-left: 3rem;
    padding-right: 3rem;
    border-radius: 1rem;
    background-color: #fff;
`;

const RemainingData = styled.p`
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.veryDarkBlue};
`;

const DataType = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-left: 1rem;
    color: ${props => props.theme.grayishBlue};
`;

function Storage() {
    return (
        <Container>
            <Info>
                You've used
                <UsedData> 815 gb </UsedData>
                of your storage
            </Info>
            <ProgressBar />
            <Surface>
                <RemainingData>185</RemainingData>
                <DataType>gb left</DataType>
            </Surface>
        </Container>
    );
}

export default Storage;