import styled from 'styled-components';
import Carousel from '@components/room-homepage/Carousel';
import BaseTopAppBar from '@components/room-homepage/TopAppBar';
import About from '@components/room-homepage/About';

const Container = styled.main`
    position: relative;
    width: 100%;
    height: auto;
`;

const TopAppBar = styled(BaseTopAppBar)`
    position: absolute;
    z-index: 50;
    top: 2.5rem;
    left: 0;
`;

function Page() {
    return (
        <Container>
            <TopAppBar />
            <Carousel />
            <About />
        </Container>
    );
}

export default Page;