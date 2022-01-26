import styled, { keyframes } from 'styled-components';

const HeadShake = keyframes`
    0% { transform: scale(1); }
    14% { transform: scale(1.3); }
    28% { transform: scale(1); }
    42% { transform: scale(1.3); }
    70% { transform: scale(1); }
`;

const Container = styled.div`
    width: auto;
    height: 1.4rem;
    border-radius: 0.7rem;
    background-color: ${props => props.theme.color.primary.orange};
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    animation-name: ${HeadShake};
    animation-duration: calc(1000ms * 1.3);
    animation-timing-function: ease-in-out;
`;

const Label = styled.span`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.4rem;
    color: ${props => props.theme.color.neutral.white};
`;

function Badge(props) {
    return (
        <Container className={props.className}>
            <Label>{props.label}</Label>
        </Container>
    );
}

export default Badge;