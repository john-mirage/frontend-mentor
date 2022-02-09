import styled from 'styled-components';

const Container = styled.li`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
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
`;

function Thumbnail({ className, thumbnail, action }) {
    return (
        <Container className={className} onClick={action}>
            <Image src={thumbnail.src} alt={thumbnail.alt} />
            <Overlay />
        </Container>
    );
}

export default Thumbnail;