import styled from "styled-components";
import checkIcon from "@assets/interactive-pricing/icon-check.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
`;

const Icon = styled.img`
    width: 1.2rem;
    height: auto;
    margin-right: 1.5rem;
`;

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

function Feature(props) {
    return (
        <Container className={props.className}>
            <Icon src={checkIcon.src} />
            <Text>{props.feature}</Text>
        </Container>
    );
}

export default Feature;