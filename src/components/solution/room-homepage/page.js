import styled from 'styled-components';
import Carousel from '@components/solution/room-homepage/carousel';
import BaseTopAppBar from '@components/solution/room-homepage/top-app-bar';
import About from '@components/solution/room-homepage/about';

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