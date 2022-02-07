import Head from "next/head";
import Link from 'next/link';
import styled, { css } from "styled-components";
import Layout from "@components/layout";
import BaseHero from "@components/hero";
import { getHtmlFromMarkdown } from "@utils/html-utils";
import { getChallenge, getChallengeSlugs, searchChallengeFilename } from "@api/challenge-api";

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
        line-height: 2.4rem;
        color: ${props => props.theme.color.neutral.gray};
    }
`;

const Button = styled.button`
    max-width: 20rem;
    height: 4rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    line-height: ${props => props.border ? "3.6rem" : "4rem"};
    letter-spacing: 0.02rem;
    color: ${props => props.theme.color.primary.purple};
    border-radius: 1rem;
    ${props => props.border && css`
        border: 0.2rem solid ${props => props.theme.color.primary.purple};
    `}
`;

function Challenge({ challenge }) {
    return (
        <>
            <Head>
                <title>Frontend Mentor | {challenge.name}</title>
            </Head>
            <Layout>
                <Hero title={challenge.name} />
                <Link href={`/solution/${challenge.slug}`} passHref>
                    <Button as="a" border>Open project</Button>
                </Link>
            </Layout>
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    const challengeSlug = String(params?.slug);
    const challengeFilename = searchChallengeFilename(challengeSlug);
    const challenge = getChallenge(challengeFilename);
    const challengeDto = {
        slug: challenge.slug,
        name: challenge.name,
        gallery: challenge.gallery,
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