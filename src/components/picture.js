import { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Picture = forwardRef(({ imageSrc, imageAlt }, ref) => {
    return (
        <Container
            ref={ref}
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
            />
        </Container>
    );
});

export default Picture;