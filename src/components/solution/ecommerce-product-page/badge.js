import { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: auto;
    height: 1.4rem;
    border-radius: 0.7rem;
    background-color: ${props => props.theme.color.primary.orange};
    padding-left: 0.7rem;
    padding-right: 0.7rem;
`;

const Label = styled.span`
    margin: auto;
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
`;

const Badge = forwardRef(({ className, children }, ref) => {
    return (
        <Container className={className} ref={ref}>
            <Label>{children}</Label>
        </Container>
    );
});

export default Badge;