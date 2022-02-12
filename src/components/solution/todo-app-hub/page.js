import styled from 'styled-components';
import BaseTopAppBar from '@components/solution/todo-app-hub/top-app-bar';
import BaseTodoInput from '@components/solution/todo-app-hub/todo-input';
import BaseTodoList from '@components/solution/todo-app-hub/todo-list';
import BaseTodoFilter from '@components/solution/todo-app-hub/todo-filter';
import backgroundMobileLight from '@assets/solution/todo-app-hub/bg-mobile-light.jpg';
import backgroundMobileDark from '@assets/solution/todo-app-hub/bg-mobile-dark.jpg';

const Container = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: url(${props => props.isDarkTheme ? backgroundMobileDark.src : backgroundMobileLight.src});
    background-color: ${props => props.theme.neutral.background};
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding-top: 10rem;
    padding-bottom: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const TopAppBar = styled(BaseTopAppBar)`
    position: absolute;
    top: 0;
    left: 0;
`;

const TodoInput = styled(BaseTodoInput)`
    margin-bottom: 2rem;
`;

const TodoList = styled(BaseTodoList)`
    margin-bottom: 2rem;
`;

const TodoFilter = styled(BaseTodoFilter)`
    margin-bottom: 5rem;
`;

const Advice = styled.p`
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.neutral.secondaryText};
`;

const todos = [
    {
        content: 'Complete online JavaScript course',
        isDone: true,
    },
    {
        content: 'Jog around the park 3x',
        isDone: false,
    },
    {
        content: '10 minutes meditation',
        isDone: false,
    },
    {
        content: 'Read for 1 hour',
        isDone: false,
    },
    {
        content: 'Pick up groceries',
        isDone: false,
    },
    {
        content: 'Complete Todo App on Frontend Mentor',
        isDone: false,
    },
];

function Page({ isDarkTheme, setIsDarkTheme }) {
    return (
        <Container isDarkTheme={isDarkTheme}>
            <TopAppBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            <TodoInput />
            <TodoList todos={todos} />
            <TodoFilter />
            <Advice>Drag and drop to reorder list</Advice>
        </Container>
    );
}

export default Page;