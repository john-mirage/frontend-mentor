import styled from 'styled-components';

const Container = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom: 0.1rem solid ${props => props.theme.neutral.divider};
`;

const Value = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.neutral.primaryText};
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

function Todo({ className, todo }) {
    return (
        <Container className={className}>
            <Value>{todo.content}</Value>
        </Container>
    );
}

export default Todo;