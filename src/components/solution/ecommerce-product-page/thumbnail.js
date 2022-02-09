import styled, { css } from 'styled-components';

const Container = styled.li`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    ${props => props.isActive && css`
        outline: 0.2rem solid ${props.theme.color.primary.orange};
    `}
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
    transition: background-color 300ms;
    ${props => props.isActive && css`
        background-color: rgba(255, 255, 255, 0.5);
    `}
`;

function Thumbnail({ className, thumbnail, action, isActive }) {
    return (
        <Container className={className} onClick={action} isActive={isActive}>
            <Image src={thumbnail.src} alt={thumbnail.alt} />
            <Overlay isActive={isActive} />
        </Container>
    );
}

export default Thumbnail;