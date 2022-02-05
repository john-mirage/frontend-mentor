import styled from "styled-components";

const Button = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 300ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const Icon = styled.div`
    margin: auto;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Dot = styled.div`
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.secondary.white};
`;

function MoreButton() {
    return (
        <Button>
            <Icon>
                <Dot />
                <Dot />
                <Dot />
            </Icon>
        </Button>
    );
}

export default MoreButton;