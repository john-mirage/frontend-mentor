import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Bar = styled.div`
    width: 100%;
    height: 2.4rem;
    padding: 0.4rem;
    border-radius: 1.2rem;
    background-color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const Slider = styled.div`
    width: 75%;
    height: 1.6rem;
    padding: 0.2rem;
    border-radius: 0.8rem;
    background: linear-gradient(${props => props.theme.color.primary.gradient});
`;

const Handle = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    margin-left: auto;
    border-radius: 0.6rem;
    background-color: ${props => props.theme.color.neutral.paleBlue};
`;

const Scale = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 1rem;
`;

const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.color.neutral.paleBlue};
`;

function ProgressBar(props) {
    return (
        <Container className={props.className}>
            <Bar>
                <Slider>
                    <Handle />
                </Slider>
            </Bar>
            <Scale>
                <Text>0 gb</Text>
                <Text>1000 gb</Text>
            </Scale>
        </Container>
    );
}

export default ProgressBar;