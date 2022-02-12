import styled from 'styled-components';
import Todo from '@components/solution/todo-app-hub/todo';

const List = styled.ul`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.neutral.foreground};
    border-radius: 0.6rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

function TodoList({ className, todos }) {
    return (
        <List className={className}>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo={todo}
                />
            ))}
        </List>
    );
}

export default TodoList;