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
`;

function AppInput() {
    return (
        <Container>
            <TextInput type="text" placeholder="Type a message..." />
            <Button />
        </Container>
    );
}

export default AppInput;