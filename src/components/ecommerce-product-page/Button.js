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
    cursor: pointer;
`;

const Label = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
`;

function Button(props) {
    return (
        <Container className={props.className} onClick={props.action}>
            {props.children}
            <Label>{props.label}</Label>
        </Container>
    );
}

export default Button;