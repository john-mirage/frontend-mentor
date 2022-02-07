import styled from "styled-components";
import Link from "next/link";

const Container = styled.li`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
    border-radius: 1rem;
    overflow: hidden;
`;

const ChallengeLink = styled.a`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Image = styled.img`
    position: absolute;
    z-index: 5;
    top: -4rem;
    left: -4rem;
    width: calc(100% + 8rem);
    height: calc(100% + 8rem);
    object-fit: cover;
    backface-visibility: hidden;
    transition: transform 300ms;

    ${ChallengeLink}:hover ~ & {
        transform: scale(1.05) translateZ(0);
    }
`;

function Card({ slug, gallery }) {
    return (
        <>
            <Container>
                <Link href={`/challenge/${slug}`} passHref>
                    <ChallengeLink />
                </Link>

                <Image
                    src={gallery.preview.src}
                    alt={gallery.preview.alt}
                />
            </Container>
        </>
    );
}

export default Card;