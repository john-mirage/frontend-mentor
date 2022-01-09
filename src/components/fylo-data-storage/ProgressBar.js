import styled from "styled-components";

const Bar = styled.div`
    width: 100%;
    height: 2.4rem;
    padding: 0.4rem;
    border-radius: 1.2rem;
    background-color: ${props => props.theme.veryDarkBlue};
`;

const Slider = styled.div`
    width: 75%;
    height: 1.6rem;
    padding: 0.2rem;
    border-radius: 0.8rem;
    background: linear-gradient(${props => props.theme.gradient});
`;

const Dot = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    margin-left: auto;
    border-radius: 0.6rem;
    background-color: ${props => props.theme.paleBlue};
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 1rem;
`;

const Scale = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.paleBlue};
`;

function ProgressBar() {
    return (
        <>
            <Bar>
                <Slider>
                    <Dot />
                </Slider>
            </Bar>
            <Info>
                <Scale>0 gb</Scale>
                <Scale>1000 gb</Scale>
            </Info>
        </>
    );
}

export default ProgressBar;