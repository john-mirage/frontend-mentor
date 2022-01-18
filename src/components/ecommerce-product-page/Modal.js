import styled from "styled-components";
import Carrousel from "@components/ecommerce-product-page/Carrousel";

const Container = styled.div`

`;

function Modal(props) {
    return (
        <Container className={props.className}>
            <Carrousel />
        </Container>
    );
}

export default Modal;