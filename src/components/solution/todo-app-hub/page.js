import styled from 'styled-components';
import BaseTopAppBar from '@components/solution/todo-app-hub/top-app-bar';
import BaseTodoInput from '@components/solution/todo-app-hub/todo-input';
import BaseTodoList from '@components/solution/todo-app-hub/todo-list';
import BaseTodoFilter from '@components/solution/todo-app-hub/todo-filter';
import lightThemeMobileImage from '@assets/solution/todo-app-hub/bg-mobile-light.jpg';
import darkThemeMobileImage from '@assets/solution/todo-app-hub/bg-mobile-dark.jpg';
import lightThemeDesktopImage from '@assets/solution/todo-app-hub/bg-desktop-light.jpg';
import darkThemeDesktopImage from '@assets/solution/todo-app-hub/bg-desktop-dark.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const Screen = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding-top: 10rem;
    padding-bottom: 8rem;
    transition: background-color 300ms;
    background-color: ${props => props.theme.neutral.background};

    @media screen and (min-width: 992px) {
        padding-top: 20rem;
    }
`;

const Container = styled.main`
    position: relative;
    z-index: 100;
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: 768px) {
        width: 72rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
    }
`;

const TopAppBar = styled(BaseTopAppBar)`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
`;

const Background = styled(motion.div)`
    position: absolute;
    z-index: 90;
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background-image: url(${props => props.$isDarkTheme ? darkThemeMobileImage.src : lightThemeMobileImage.src});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 992px) {
        height: 40rem;
        background-image: url(${props => props.$isDarkTheme ? darkThemeDesktopImage.src : lightThemeDesktopImage.src});
    }
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
        <Screen isDarkTheme={isDarkTheme}>

            <TopAppBar
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
                container={Container}
            />

            <AnimatePresence>
                <Background
                    key={isDarkTheme ? 'dark-theme-image' : 'light-theme-image'}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.2 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    $isDarkTheme={isDarkTheme}
                />
            </AnimatePresence>

            <Container>
                <TodoInput />
                <TodoList todos={todos} />
                <TodoFilter />
                <Advice>Drag and drop to reorder list</Advice>
            </Container>

        </Screen>
    );
}

export default Page;