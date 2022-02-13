import styled from 'styled-components';
import { useState } from 'react';
import { Reorder } from 'framer-motion';
import BaseTodoMenu from '@components/solution/todo-app-hub/todo-menu';
import BaseTodo from '@components/solution/todo-app-hub/todo';

const TodoMenu = styled(BaseTodoMenu)`
    background-color: ${props => props.theme.neutral.foreground};
`;

const Todo = styled(BaseTodo)`
    margin-bottom: 0.1rem;
`;

function TodoList({ todoList, todoListFilter, setTodoList, setTodoListFilter }) {
    const [todoOrderList, setTodoOrderList] = useState(todoList.map(todo => todo.id));
    const filteredTodoList = getFilteredTodoList();

    function getFilteredTodoList() {
        switch (todoListFilter) {
            case 'all':
                return todoList;
            case 'active':
                return todoList.map(todo => !todo.completed);
            case 'completed':
                return todoList.map(todo => todo.completed);
            default:
                throw new Error('The todo list filter is not valid');
        }
    }

    function handleTodoListChange(updatedTodo) {
        setTodoList(todoList.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    }

    function handleTodoListOrder(newTodoOrderList) {
        setTodoList(newTodoOrderList.map(todoId => todoList.find(todo => todo.id === todoId)));
        setTodoOrderList(newTodoOrderList);
    }

    return (
        <>
            <Reorder.Group axis="y" onReorder={handleTodoListOrder} values={todoOrderList}>
                {todoOrderList.map((todoId) => {
                    const todo = todoList.find(todo => todoId === todo.id);
                    if (!todo) throw new Error("Todo does not exist");
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            handleTodoListChange={handleTodoListChange}
                        />
                    )
                })}
            </Reorder.Group>
            <TodoMenu />
        </>
    );
}

export default TodoList;