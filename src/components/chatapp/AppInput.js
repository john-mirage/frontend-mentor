import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 5.6rem;
    background-color: ${props => props.theme.secondaryWhite};
    border-radius: 2.8rem;
    overflow: hidden;
`;

const TextInput = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 3.2rem;
    padding-right: 6.4rem;
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.textDesaturatedDarkViolet};

    &::placeholder {
        color: ${props => props.theme.textGrayishBlue};
    }
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryVeryDarkDesaturatedViolet};
    outline: none;
    border: none;
    cursor: pointer;
`;

const ButtonArrowElement = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    width: 1.4rem;
    height: 0.4rem;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    background-color: ${props => props.theme.secondaryWhite};
`;

const ButtonUpArrowElement = styled(ButtonArrowElement)`
    transform-origin: top right;
    transform: translate(50%, calc(-50% + 0.2rem)) rotateZ(45deg);
`;

const ButtonDownArrowElement = styled(ButtonArrowElement)`
    transform-origin: bottom right;
    transform: translate(50%, calc(-50% - 0.2rem)) rotateZ(-45deg);
`;

function AppInput() {
    return (
        <Container>
            <TextInput type="text" placeholder="Type a message..." />
            <Button>
                <ButtonUpArrowElement />
                <ButtonDownArrowElement />
            </Button>
        </Container>
    );
}

export default AppInput;