import styled from "styled-components";
import RightArrowButton from "@components/chatapp/RightArrowButton";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 5.6rem;
    background-color: ${props => props.theme.secondaryWhite};
    border-radius: 2.8rem;
    overflow: hidden;
`;

const Input = styled.input.attrs(() => {
    return {
        type: "text",
        placeholder: "Type a message..."
    }
})`
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

const Button = styled.div`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
`;

function TextInput() {
    return (
        <Container>
            <Input />
            <Button>
                <RightArrowButton />
            </Button>
        </Container>
    );
}

export default TextInput;