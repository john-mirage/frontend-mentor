import styled from 'styled-components';

const Container = styled.button`
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Icon = styled.img`
    margin: auto;
    width: ${props => props.iconSize || "2.4rem"};
    height: auto;
    ${props => props.isAvatar && `
        &:hover {
            box-sizing: content-box;
            border-radius: 50%;
            border: 0.1rem solid ${props.theme.color.primary.orange}
        };
    `}
`;

function IconButton(props) {
    return (
        <Container
            className={props.className}
            onClick={props.action}
        >
            <Icon
                src={props.icon}
                iconSize={props.iconSize}
                isAvatar={props.isAvatar}
            />
        </Container>
    );
}

export default IconButton;