import styled from 'styled-components';
import BaseTopAppBar from '@components/solution/todo-app-hub/top-app-bar';
import TodoInput from '@components/solution/todo-app-hub/todo-input';
import TodoList from '@components/solution/todo-app-hub/todo-list';
import TodoFilter from '@components/solution/todo-app-hub/todo-filter';
import lightThemeMobileImage from '@assets/solution/todo-app-hub/bg-mobile-light.jpg';
import darkThemeMobileImage from '@assets/solution/todo-app-hub/bg-mobile-dark.jpg';
import lightThemeDesktopImage from '@assets/solution/todo-app-hub/bg-desktop-light.jpg';
import darkThemeDesktopImage from '@assets/solution/todo-app-hub/bg-desktop-dark.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { nanoid } from 'nanoid';

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

const Section = styled.div`
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
    overflow: hidden;
    transition: background-color 300ms;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    margin-bottom: 2rem;
`;

const TopSection = styled(Section)`
    background-color: ${props => props.theme.neutral.foreground};
`;

const MiddleSection = styled(Section)`
    background-color: ${props => props.theme.neutral.divider};
`;

const BottomSection = styled(Section)`
    background-color: ${props => props.theme.neutral.foreground};
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media screen and (min-width: 992px) {
        display: none;
    }
`;

const TopAppBar = styled(BaseTopAppBar)`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
`;

const Advice = styled.p`
    width: 100%;
    height: auto;
    margin-top: 5rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.neutral.secondaryText};
`;

const todos = [
    {
        id: nanoid(),
        content: 'Complete online JavaScript course',
        completed: true,
    },
    {
        id: nanoid(),
        content: 'Jog around the park 3x',
        completed: false,
    },
    {
        id: nanoid(),
        content: '10 minutes meditation',
        completed: false,
    },
    {
        id: nanoid(),
        content: 'Read for 1 hour',
        completed: false,
    },
    {
        id: nanoid(),
        content: 'Pick up groceries',
        completed: false,
    },
    {
        id: nanoid(),
        content: 'Complete Todo App on Frontend Mentor',
        completed: false,
    },
];

function Page({ isDarkTheme, setIsDarkTheme }) {
    const [todoList, setTodoList] = useState(todos);
    const [todoListFilter, setTodoListFilter] = useState('all');

    return (
        <Screen isDarkTheme={isDarkTheme}>

            <TopAppBar
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
                container={Container}
            />

            <AnimatePresence initial={false}>
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
                <TopSection>
                    <TodoInput />
                </TopSection>

                <MiddleSection>
                    <TodoList
                        todoList={todoList}
                        todoListFilter={todoListFilter}
                        setTodoList={setTodoList}
                        setTodoListFilter={setTodoListFilter}
                    />
                </MiddleSection>

                <BottomSection>
                    <TodoFilter
                        todoListFilter={todoListFilter}
                        setTodoListFilter={setTodoListFilter}
                    />
                </BottomSection>
                
                <Advice>Drag and drop to reorder list</Advice>
            </Container>

        </Screen>
    );
}

export default Page;