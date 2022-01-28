import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    position: relative;
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Icon = styled.div`
    margin: auto;
`;

const IconButton = React.forwardRef((props, ref) => {
    return (
        <Container
            className={props.className}
            onClick={props.action}
            ref={ref}
        >
            <Icon>
                {props.children}
            </Icon>
        </Container>
    );
})

export default IconButton;