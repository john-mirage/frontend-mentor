import styled from 'styled-components';
import { Reorder } from 'framer-motion';
import BaseTodoMenu from '@components/solution/todo-app-hub/todo-menu';
import BaseTodo from '@components/solution/todo-app-hub/todo';
import { useRef } from 'react';

const TodoMenu = styled(BaseTodoMenu)`
    border-top: 0.1rem solid ${props => props.theme.neutral.divider};
    background-color: ${props => props.theme.neutral.foreground};
`;

const Todo = styled(BaseTodo)`
    margin-bottom: 0.1rem;
`;

function TodoList({
    todoList,
    todoListFilter,
    setTodoList,
    setTodoListFilter,
    clearCompletedTodos,
    deleteTodo
}) {
    let todoOrderList = todoList.map(todo => todo.id);
    const remainingTodos = todoList.filter(todo => !todo.completed).length;
    const constraintsRef = useRef();

    function handleTodoListChange(updatedTodo) {
        setTodoList(todoList.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    }

    function handleTodoListOrder(newTodoOrderList) {
        setTodoList(newTodoOrderList.map(todoId => todoList.find(todo => todo.id === todoId)));
    }

    return (
        <>
            <Reorder.Group
                axis="y"
                onReorder={handleTodoListOrder}
                values={todoOrderList}
                ref={constraintsRef}
                style={{ overflow: 'hidden' }}
            >
                {todoOrderList.map((todoId) => {
                    const todo = todoList.find(todo => todoId === todo.id);
                    if (!todo) throw new Error("Todo does not exist");
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            handleTodoListChange={handleTodoListChange}
                            deleteTodo={deleteTodo}
                            constraintsRef={constraintsRef}
                        />
                    )
                })}
            </Reorder.Group>

            <TodoMenu
                remainingTodos={remainingTodos}
                clearCompletedTodos={clearCompletedTodos}
            />
        </>
    );
}

export default TodoList;