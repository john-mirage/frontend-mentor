import styled, { css } from 'styled-components';
import { Reorder } from 'framer-motion';
import IconButton from '@components/solution/todo-app-hub/icon-button';
import BaseDeleteIcon from '@assets/solution/todo-app-hub/icon-cross.svg?react';

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

const DeleteButton = styled(IconButton)`
    margin-left: auto;
    margin-right: -1.8rem;
`;

const DeleteIcon = styled(BaseDeleteIcon)`
    width: 1.2rem;
    height: auto;
    fill: ${props => props.theme.neutral.secondaryText};
`;

function Todo({ className, todo, handleTodoListChange, deleteTodo }) {
    function handleTodoCompletion(event) {
        const todoNewCompletedState = event.target.checked;
        handleTodoListChange({ id: todo.id, content: todo.content, completed: todoNewCompletedState });
    }

    function handleTodoDeletion(event) {
        event.preventDefault();
        deleteTodo(todo.id)
    }

    return (
        <Reorder.Item value={todo.id}>
            <Container className={className}>
                <State type="checkbox" checked={todo.completed} onChange={handleTodoCompletion} />
                <Content todoIsCompleted={todo.completed}>{todo.content}</Content>
                <DeleteButton action={handleTodoDeletion}>
                    <DeleteIcon />
                </DeleteButton>
            </Container>
        </Reorder.Item>
    );
}

export default Todo;