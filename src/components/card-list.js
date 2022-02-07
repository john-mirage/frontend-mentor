import styled from 'styled-components';
import Card from "@components/card";

const Container = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

function CardList({ className, challenges }) {
    return (
        <Container className={className}>
            {challenges.map(challenge => (
                <Card
                    key={challenge.slug}
                    {...challenge}
                />
            ))}
        </Container>
    );
}

export default CardList;