import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: ${props => props.size};
    height: ${props => props.size};
`;

const ArrowPart = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    width: 40%;
    height: 10%;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    background-color: ${props => props.theme.secondaryWhite};
`;

const ArrowUpPart = styled(ArrowPart)`
    transform-origin: top right;
    transform: translate(50%, 0) rotateZ(55deg);
`;

const ArrowDownPart = styled(ArrowPart)`
    transform-origin: bottom right;
    transform: translate(50%, -100%) rotateZ(-55deg);
`;

function ArrowIcon(props) {
    return (
        <Container size={props.size}>
            <ArrowUpPart />
            <ArrowDownPart />
        </Container>
    );
}

export default ArrowIcon;