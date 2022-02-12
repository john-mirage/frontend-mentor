import styled from 'styled-components';
import Todo from '@components/solution/todo-app-hub/todo';
import { useState } from 'react';
import { Reorder } from 'framer-motion';

const Container = styled.div`
    width: 100%;
    height: auto;
    transition: background-color 300ms;
    background-color: ${props => props.theme.neutral.foreground};
    border-radius: 0.6rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

function TodoList({ className }) {
    const [todos, setTodos] = useState(['first', 'second', 'third', 'fourth', 'fifth']);

    return (
        <Container className={className}>
            <Reorder.Group axis="y" onReorder={setTodos} values={todos}>
                {todos.map((todo) => (
                    <Todo key={todo} todo={todo} />
                ))}
            </Reorder.Group>
        </Container>
    );
}

export default TodoList;