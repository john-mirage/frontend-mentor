import styled from 'styled-components';

const Container = styled.button`
    width: auto;
    height: 4rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    border-radius: 1rem;
    border: 0.5rem solid ${props => props.theme.color.primary.purple};
`;

function Button({ as, children }) {
    return (
        <Container as={as}>
            {children}
        </Container>
    );
}

export default Button;