import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

function Modal({ children }) {
    return createPortal(
        <Container>
            {children}
        </Container>,
        document.getElementById("screen")
    );
}

export default Modal;