import Head from "next/head";
import styled from "styled-components";
import Layout from "@components/layout";
import BaseHero from "@components/hero";
import CardList from "@components/card-list";
import { getLocaleDate } from "@utils/date-utils";
import { getChallenge, getChallengeSlugs, sortChallengesByDate } from "@api/challenge-api";

const Hero = styled(BaseHero)`
    margin-bottom: 10rem;
`;

function Index({ challenges }) {
    console.log(challenges);
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
    const challengeSlugs = getChallengeSlugs();
    const challenges = challengeSlugs.map((challengeSlug) => getChallenge(challengeSlug));
    const sortedChallenges = sortChallengesByDate(challenges);
    const challengeDtos = sortedChallenges.map((challenge) => {
        return {
            name: challenge.name,
            date: getLocaleDate('en-US', challenge.date),
        }
    });
    return {
        props: {
            challenges: challengeDtos,
        }
    };
}

export default Index;