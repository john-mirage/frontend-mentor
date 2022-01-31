import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function Picture({ imageSrc, imageAlt }) {
    return (
        <Container>
            <Image
                src={imageSrc}
                alt={imageAlt}
            />
        </Container>
    );
}

export default Picture;