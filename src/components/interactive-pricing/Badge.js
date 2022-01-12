import styled from "styled-components";

const Container = styled.span`
    display: block;
    width: auto;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.color.primary.lightGrayishRed};
`;

const Text = styled.span`
    display: block;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 2rem;
    color: ${props => props.theme.color.primary.lightRed};

    @media screen and (min-width: 860px) {
        &::after {
            content: "discount";
            margin-left: 0.4rem;
        }
    }
`;

function Badge(props) {
    return (
        <Container className={props.className}>
            <Text>-25%</Text>
        </Container>
    );
}

export default Badge;