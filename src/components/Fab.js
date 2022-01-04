import Link from "next/link";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translate(-50%, -5.6rem);
    }

    to {
        transform: translateX(-50%, 0);
    }
`;

const Container = styled.a`
    position: fixed;
    z-index: 99;
    top: 1.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 4rem;
    border-radius: 0.4rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-color: #ffffff;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    animation: ${slideIn} 300ms linear;
`;

const Label = styled.span`
    text-align: center;
    line-height: 4rem;
    font-size: 1.6rem;
    font-weight: 500;
`;

function Fab() {
    return (
        <Link href="/">
            <Container>
                <Label>Home</Label>
            </Container>
        </Link>
    );
}

export default Fab;
