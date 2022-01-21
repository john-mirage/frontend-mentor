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
    width: 100%;
    padding-bottom: 100%;
    border-radius: 10%;
    overflow: hidden;
    box-shadow: 0 1em 0 rgba(0, 0, 0, 0.3);
    perspective: 50rem;
`;

const Pannel = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
`;

const FixedPannel = styled(Pannel)`
    z-index: 10;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
    overflow: hidden;
`;

const TopPannel = styled(FixedPannel)`
    top: 0;
    align-items: flex-end;
`;

const BottomPannel = styled(FixedPannel)`
    bottom: 0;
    align-items: flex-start;
`;

const MovingPannel = styled(Pannel)`
    z-index: 20;
    top: 0;
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
`;

const Back = styled(Face)`
    align-items: flex-start;
    transform: rotateY(180deg) rotate(180deg);
`;

const BaseNumber = styled.p`
    font-size: 10vw;
    line-height: 10vw;
    font-weight: 700;
    color: ${props => props.theme.color.primary.softRed};

    @media screen and (min-width: 576px) {
        font-size: 6rem;
        line-height: 6rem;
    }

    @media screen and (min-width: 848px) {
        font-size: 8rem;
        line-height: 8rem;
    }
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
    width: 10%;
    padding-bottom: 10%;
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
                <MovingPannel key={props.currentValue}>
                    <Front>
                        <BottomNumber>{props.currentValue}</BottomNumber>
                        <Overlay />
                    </Front>
                    <Back>
                        <TopNumber>{props.nextValue}</TopNumber>
                    </Back>
                </MovingPannel>
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