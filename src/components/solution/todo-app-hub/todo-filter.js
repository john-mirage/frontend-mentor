import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

const Filter = styled.button`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.neutral.secondaryText};
    margin-right: 2rem;
    transition: color 300ms;

    &:hover {
        color: ${props => props.theme.primary.brightBlue};
    }

    &:last-child {
        margin-right: 0;
    }
`;

function TodoFilter({ className }) {
    return (
        <Container className={className}>
            <Filter>All</Filter>
            <Filter>Active</Filter>
            <Filter>Completed</Filter>
        </Container>
    );
}

export default TodoFilter;