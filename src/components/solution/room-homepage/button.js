import styled from 'styled-components';
import BaseArrowIcon from '@assets/solution/room-homepage/icon-arrow.svg?react';

const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    height: 4rem;
`;

const Label = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: ${props => props.theme.color.primary.veryDarkGray};
    margin-right: 2rem;
`;

const ArrowIcon = styled(BaseArrowIcon)`
    width: 3.8rem;
    height: auto;
    stroke: ${props => props.theme.color.primary.veryDarkGray};
    fill: none;
`;

function Button({ className }) {
    return (
        <Container className={className}>
            <Label>shop now</Label>
            <ArrowIcon />
        </Container>
    );
}

export default Button;