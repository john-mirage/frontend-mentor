import styled from "styled-components";
import checkIcon from "@assets/interactive-pricing/icon-check.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

    @media screen and (min-width: 375px) {
        flex-direction: row;
    }
`;

const Icon = styled.img`
    width: 1.2rem;
    height: auto;

    @media screen and (min-width: 375px) {
        margin-right: 1.5rem;
    }
`;

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

function Feature(props) {
    return (
        <Container className={props.className}>
            <Icon src={checkIcon} />
            <Text>{props.feature}</Text>
        </Container>
    );
}

export default Feature;