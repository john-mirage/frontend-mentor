import styled from 'styled-components';

const Container = styled.button`
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    transition: background-color 300ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const Icon = styled.span`
    margin: auto;
`;

function IconButton({ className, children }) {
    return (
        <Container className={className}>
            <Icon>
                {children}
            </Icon>
        </Container>
    );
}

export default IconButton;