import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    transition: background-color 300ms;
    background-color: ${props => props.theme.neutral.foreground};
    border-radius: 0.6rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const SubmitButton = styled.button`
    flex: 0 0 3rem;
    order: 1;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.theme.primary.brightBlue};
`;

const TextInput = styled.input`
    flex: 1 1 0;
    order: 2;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    background-color: inherit;
    color: ${props => props.theme.neutral.primaryText};

    &::placeholder {
        color: ${props => props.theme.neutral.secondaryText};
    }
`;

function TodoInput({ className, addTodo }) {
    const textInputRef = useRef();

    function handleTodoCreation(event) {
        event.preventDefault();
        const todoContent = textInputRef.current.value;
        if (todoContent.length > 0) addTodo(todoContent);
        textInputRef.current.value = "";
    }

    return (
        <Container className={className}>
            <TextInput type="text" placeholder='Create a new todo...' ref={textInputRef} />
            <SubmitButton onClick={handleTodoCreation} />
        </Container>
    );
}

export default TodoInput;