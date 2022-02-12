import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    position: relative;
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    cursor: pointer;
`;

const Icon = styled.div`
    margin: auto;
`;

const IconButton = React.forwardRef(({ className, action, children }, ref) => {
    return (
        <Container
            className={className}
            onClick={action}
            ref={ref}
        >
            <Icon>
                {children}
            </Icon>
        </Container>
    );
})

export default IconButton;