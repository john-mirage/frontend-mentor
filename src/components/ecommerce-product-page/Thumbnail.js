import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    ${props => props.isActive && `outline: 0.2rem solid ${props.theme.color.primary.orange};`}
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${props => props.isActive && "background-color: rgba(255, 255, 255, 0.4);"}

    ${Container}:hover & {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

function Thumbnail({ className, action, thumbnail, isActive }) {
    return (
        <Container
            className={className}
            isActive={isActive}
            onClick={action}
        >
            <Image src={thumbnail} />
            <Overlay isActive={isActive} />
        </Container>
    );
}

export default Thumbnail;