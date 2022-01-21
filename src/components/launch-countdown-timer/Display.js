import styled, { keyframes } from "styled-components";

const flip = keyframes`
    from {
        transform: rotateX(0);
    }
    to {
        transform: rotateX(-180deg);
    }
`;

const Container = styled.div`
    position: relative;
    width: 16rem;
    height: 16rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 1rem 0 ${props => props.theme.color.neutral.veryDarkBlue};
    perspective: 100rem;
`;

const Pannel = styled.div`
    width: 100%;
    height: 50%;
`;

const FixedPannel = styled(Pannel)`
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
    overflow: hidden;
`;

const TopPannel = styled(FixedPannel)`
    align-items: flex-end;
`;

const BottomPannel = styled(FixedPannel)`
    align-items: flex-start;
`;

const FlipPannel = styled(Pannel)`
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    transform-origin: bottom;
    transform-style: preserve-3d;
    animation: ${flip} 1000ms linear;
`;

const Face = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    background-color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
`;

const Front = styled(Face)`
    align-items: flex-end;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`;

const Back = styled(Face)`
    align-items: flex-start;
    transform: rotateY(180deg) rotate(180deg);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;

const BaseNumber = styled.p`
    font-size: 8rem;
    font-weight: 700;
    line-height: 8rem;
    color: ${props => props.theme.color.primary.softRed};
`;

const BottomNumber = styled(BaseNumber)`
    transform: translateY(50%);
`;

const TopNumber = styled(BaseNumber)`
    transform: translateY(-50%);
`;

const Circle = styled.div`
    position: absolute;
    z-index: 30;
    top: 50%;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const LeftCircle = styled(Circle)`
    left: 0;
    transform: translate(-50%, -50%);
`;

const RightCircle = styled(Circle)`
    right: 0;
    transform: translate(50%, -50%);
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
`;

function Display(props) {
    return (
        <Container>
            <TopPannel>
                <BottomNumber>{props.nextValue}</BottomNumber>
                <Overlay />
            </TopPannel>

            {props.hasChanged &&
                <FlipPannel key={props.currentValue}>
                    <Front>
                        <BottomNumber>{props.currentValue}</BottomNumber>
                        <Overlay />
                    </Front>
                    <Back>
                        <TopNumber>{props.nextValue}</TopNumber>
                    </Back>
                </FlipPannel>
            }

            <BottomPannel>
                <TopNumber>{props.currentValue}</TopNumber>
            </BottomPannel>

            <LeftCircle />
            <RightCircle />
        </Container>
    );
}

export default Display;