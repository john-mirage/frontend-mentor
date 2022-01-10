import styled from "styled-components";

const Button = styled.button`
    position: relative;
    display: block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 300ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const Rectangle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.2rem;
    height: 0.4rem;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    background-color: ${props => props.theme.color.secondary.white};

    &:first-child {
        transform-origin: top left;
        transform:
            translateX(-0.5rem)
            rotateZ(-60deg);
    }

    &:last-child {
        transform-origin: bottom left;
        transform:
            translate(-0.5rem, -0.4rem)
            rotateZ(60deg);
    }
`;

function LeftArrowButton() {
    return (
        <Button>
            <Rectangle />
            <Rectangle />
        </Button>
    );
}

export default LeftArrowButton;