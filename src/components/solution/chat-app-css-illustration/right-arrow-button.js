import styled from "styled-components";

const Button = styled.button`
    position: relative;
    display: block;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.secondary.veryDarkDesaturatedViolet};
    border: none;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 300ms;

    &:hover {
        background-color: rgba(62, 39, 83, 0.8);
    }
`;

const Rectangle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.4rem;
    height: 0.4rem;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    background-color: ${props => props.theme.color.secondary.white};

    &:first-child {
        transform-origin: top right;
        transform:
            translateX(-0.8rem)
            rotateZ(45deg);
    }

    &:last-child {
        transform-origin: bottom right;
        transform:
            translate(-0.8rem, -0.4rem)
            rotateZ(-45deg);
    }
`;

function RightArrowButton() {
    return (
        <Button>
            <Rectangle />
            <Rectangle />
        </Button>
    );
}

export default RightArrowButton;