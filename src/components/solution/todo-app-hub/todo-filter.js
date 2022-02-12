import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 5rem;
    transition: background-color 300ms;
    background-color: ${props => props.theme.neutral.foreground};
    border-radius: 0.6rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

function TodoFilter({ className }) {
    return (
        <Container className={className}>

        </Container>
    );
}

export default TodoFilter;