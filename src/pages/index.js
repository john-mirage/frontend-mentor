import Head from "next/head";
import styled from "styled-components";
import Layout from "@components/layout";
import BaseHero from "@components/hero";
import { getAllChallenges } from "@api/challenge-api";
import CardList from "@components/card-list";

const Hero = styled(BaseHero)`
    margin-bottom: 10rem;
`;

function Index({ challenges }) {
    return (
        <>
            <Head>
                <title>Frontend Mentor</title>
            </Head>
            <Layout>
                <Hero title="Frontend Mentor Challenges" description />
                <CardList challenges={challenges} />
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    const challenges = getAllChallenges();
    const challengeDtos = challenges.map((challenge) => {
        return {
            slug: challenge.slug,
            gallery: challenge.gallery,
        }
    });
    return {
        props: {
            challenges: challengeDtos,
        }
    };
}

export default Index;