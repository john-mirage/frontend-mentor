import styled, { css } from 'styled-components';
import { Reorder, useMotionValue } from 'framer-motion';
import useRaisedShadow from '@hooks/use-raised-shadow';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    cursor: pointer;
    background-color: ${props => props.theme.neutral.foreground};
`;

const State = styled.input`

`;

const Content = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.todoIsCompleted ? props.theme.neutral.secondaryText : props.theme.neutral.primaryText};
    padding-top: 2rem;
    padding-bottom: 2rem;
    ${props => props.todoIsCompleted && css`
        text-decoration-line: line-through;
    `}
`;

function Todo({ className, todo, handleTodoListChange }) {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    function handleTodoCompletedState(event) {
        const todoNewCompletedState = event.target.checked;
        handleTodoListChange({ id: todo.id, content: todo.content, completed: todoNewCompletedState });
    }

    return (
        <Reorder.Item value={todo.id} style={{ boxShadow, y }}>
            <Container className={className}>
                <State type="checkbox" checked={todo.completed} onChange={handleTodoCompletedState} />
                <Content todoIsCompleted={todo.completed}>{todo.content}</Content>
            </Container>
        </Reorder.Item>
    );
}

export default Todo;