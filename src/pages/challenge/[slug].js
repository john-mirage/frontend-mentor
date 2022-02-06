import Head from "next/head";
import styled from "styled-components";
import Layout from "@components/layout";
import BaseHero from "@components/hero";
import { getChallenge, getChallengeSlugs } from "@api/challenge-api";
import { getHtmlFromMarkdown } from "@utils/html-utils";

const Hero = styled(BaseHero)`
    margin-bottom: 10rem;
`;

const Markdown = styled.article`
    max-width: 76rem;
    margin-left: auto;
    margin-right: auto;
    color: ${props => props.theme.color.neutral.white};
    font-size: 1.6rem;

    h1 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 1rem;
    }
`;

function Challenge({ challenge }) {
    return (
        <>
            <Head>
                <title>Frontend Mentor | {challenge.name}</title>
            </Head>
            <Layout>
                <Hero />
                <Markdown dangerouslySetInnerHTML={{ __html: challenge.html || '' }} />
            </Layout>
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    const challengeSlug = String(params?.slug);
    const challenge = getChallenge(challengeSlug);
    const challengeDto = {
        name: challenge.name,
        html: await getHtmlFromMarkdown(challenge.markdown),
    }
    return {
        props: {
            challenge: challengeDto,
        },
    };
};

export const getStaticPaths = async () => {
    const challengeSlugs = getChallengeSlugs();
    return {
        paths: challengeSlugs.map((challengeSlug) => {
            return {
                params: {
                    slug: challengeSlug,
                },
            };
        }),
        fallback: false,
    };
}

export default Challenge;