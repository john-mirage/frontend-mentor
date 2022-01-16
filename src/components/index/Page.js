import styled from "styled-components";
import Header from "@components/index/Header";
import Hero from "@components/index/Hero";
import Challenge from "@components/index/Challenge";
import challenges from "@data/challenges";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.color.primary.darkGray};
    padding-bottom: 10rem;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: 580px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

const Content = styled.div`
    width: 100%;
    height: auto;

    @media screen and (min-width: 1080px) {
        width: 100rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const StyledHeader = styled(Header)`
    margin-bottom: 10rem;
`;

const StyledHero = styled(Hero)`
    margin-bottom: 10rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    width: 100%;
    height: auto;

    @media screen and (min-width: 424px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

function Page() {
    return (
        <Container>
            <Content>
                <StyledHeader />
                <StyledHero />

                <Grid>

                    {challenges.map((challenge, index) =>
                        <Challenge
                            title={challenge.title}
                            description={challenge.description}
                            link={challenge.link}
                            image={challenge.image}
                            imageAlt={challenge.imageAlt}
                            inputId={`modal-trigger${index + 1}`}
                            key={index}
                        />
                    )}

                </Grid>

            </Content>
        </Container>
    );
}

export default Page;

/*
                
*/