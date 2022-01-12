import styled from "styled-components";

const Input = styled.input.attrs(props => {
    return {
        type: "checkbox",
        id: "toggle-button-trigger",
        name: "toggle-button-trigger"
    };
})`
    display: none;
`;

const Label = styled.label`
    display: block;
    width: 6rem;
    height: 3rem;
    padding: 0.5rem;
    border-radius: 1.5rem;
    background-color: ${props => props.theme.color.neutral.lightGrayishBlue};
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 300ms;
    transform: rotate(90deg);

    ${Input}:checked + & {
        background-color: ${props => props.theme.color.primary.softCyan};
    }

    @media screen and (min-width: 520px) {
        transform: rotate(0);
    }
`;

const Dot = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.neutral.white};
    transition-property: transform;
    transition-duration: 300ms;

    ${Input}:checked + ${Label} & {
        transform: translateX(150%);
    }
`;

function ToggleButton(props) {
    return (
        <>
            <Input />
            <Label className={props.className} htmlFor="toggle-button-trigger">
                <Dot />
            </Label>
        </>
    );
}

export default ToggleButton;