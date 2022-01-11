import styled from "styled-components";
import checkIcon from "@assets/interactive-pricing/icon-check.svg";

const Container = styled.div`
    width: auto;
    height: auto;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
`;

const Icon = styled.img`
    display: inline-block;
    width: 1.2rem;
    height: auto;
    margin-right: 1.5rem;
    vertical-align: baseline;
`;

const Text = styled.p`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
    vertical-align: baseline;
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