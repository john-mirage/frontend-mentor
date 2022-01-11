import styled from "styled-components";

const Container = styled.button`
    display: block;
    width: auto;
    height: 5rem;
    padding-left: 6rem;
    padding-right: 6rem;
    border-radius: 3rem;
    background-color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
`;

const Text = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.primary.paleBlue};
`;

function CallToAction(props) {
    return (
        <Container className={props.className}>
            <Text>Start my trial</Text>
        </Container>
    );
}

export default CallToAction;