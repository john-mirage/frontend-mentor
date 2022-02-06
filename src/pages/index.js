import Head from "next/head";
import styled from "styled-components";
import Layout from "@components/layout";
import BaseHero from "@components/hero";
import CardList from "@components/card-list";
import { getLocaleDate } from "@utils/date-utils";
import { getAllChallenges } from "@api/challenge-api";

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
                <Hero />
                <CardList />
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    const challenges = getAllChallenges();
    const challengeDtos = challenges.map((challenge) => {
        return {
            name: challenge.name,
            date: getLocaleDate('en-US', challenge.date),
            tags: challenge.tags,
        }
    });
    return {
        props: {
            challenges: challengeDtos,
        }
    };
}

export default Index;