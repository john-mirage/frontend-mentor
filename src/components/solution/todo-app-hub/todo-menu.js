import styled from 'styled-components';
import TodoFilter from '@components/solution/todo-app-hub/todo-filter';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 2.5rem 2rem;
`;

const Section = styled.div`
    flex: 1 1 0;
`;

const DesktopSection = styled(Section)`
    display: none;

    @media screen and (min-width: 992px) {
        display: block;
    }
`;

const Remaining = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.neutral.secondaryText};
`;

const ClearButton = styled.button`
    display: block;
    margin-left: auto;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.neutral.secondaryText};
`;

function TodoMenu({ className, clearCompletedTodos, remainingTodos }) {
    return (
        <Container className={className}>
            <Section>
                <Remaining>{remainingTodos} item{remainingTodos > 1 ? 's' : ''} left</Remaining>
            </Section>

            <DesktopSection>
                <TodoFilter />
            </DesktopSection>

            <Section>
                <ClearButton onClick={clearCompletedTodos}>Clear Completed</ClearButton>
            </Section>
        </Container>
    );
}

export default TodoMenu;