import styled from 'styled-components';
import { Reorder } from 'framer-motion';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom: 0.1rem solid ${props => props.theme.neutral.divider};
    cursor: pointer;
`;

const Value = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.neutral.primaryText};
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

function Todo({ todo }) {
    return (
        <Reorder.Item value={todo}>
            <Container>
                <Value>{todo}</Value>
            </Container>
        </Reorder.Item>
    );
}

export default Todo;