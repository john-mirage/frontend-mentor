import Head from "next/head";
import styled from "styled-components";
import Layout from "@components/layout";
import BaseHero from "@components/hero";
import { useRouter } from "next/router";

const Hero = styled(BaseHero)`
    margin-bottom: 10rem;
`;

function Challenge() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <>
            <Head>
                <title>Frontend Mentor | {name}</title>
            </Head>
            <Layout>
                <Hero />
            </Layout>
        </>
    );
}

export default Challenge;