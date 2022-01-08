import styled from "styled-components";

const BaseButton = styled.a`
    display: block;
    width: 100%;
    padding: 2rem;
    border-radius: 1.2rem;
    font-size: 1.6rem;
    text-align: center;
    transition-duration: 300ms;
`;

const PrimaryButton = styled(BaseButton)`
    background-color: ${props => props.theme.brightBlue};
    box-shadow: 0 25px 50px -12px rgba(56, 41, 224, 0.4);
    font-weight: 700;
    color: #FFF;
    transition-property: opacity;

    &:hover {
        opacity: 80%;
    }
`;

const SecondaryButton = styled(BaseButton)`
    font-weight: 900;
    color: ${props => props.theme.secondaryText};
    transition-property: color;

    &:hover {
        color: ${props => props.theme.primaryText};
    }
`;

function Button(props) {
    switch (props.buttonType) {
        case "primary":
            return (<PrimaryButton>{props.buttonLabel}</PrimaryButton>);
        case "secondary":
            return (<SecondaryButton>{props.buttonLabel}</SecondaryButton>);
    }
}

export default Button;