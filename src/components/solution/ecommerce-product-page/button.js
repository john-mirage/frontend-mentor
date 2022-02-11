import styled from 'styled-components';

const Container = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.color.primary.orange};
    box-shadow: 0 10px 30px -10px ${props => props.theme.color.primary.orange};
    cursor: pointer;
`;

const Label = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
`;

function Button({ className, action, children, label }) {
    return (
        <Container className={className} onClick={action}>
            {children}
            <Label>{label}</Label>
        </Container>
    );
}

export default Button;