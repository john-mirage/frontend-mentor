import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color.neutral.darkGray};
    overflow: hidden;
`;

const Header = styled.header`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
    pointer-events: none;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Body = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        padding: 4rem;
    }
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;
    letter-spacing: 0.02rem;
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0.02rem;
    color: ${props => props.theme.color.neutral.gray};
`;

const Footer = styled.div`
    flex: 0 0 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        padding: 4rem;
    }
`;

const Button = styled.button`
    width: auto;
    height: 4rem;
    margin-top: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: ${props => props.border ? "3.6rem" : "4rem"};
    letter-spacing: 0.02rem;
    color: ${props => props.theme.color.primary.purple};
    border-radius: 1rem;
    ${props => props.border && css`
        border: 0.2rem solid ${props => props.theme.color.primary.purple};
    `}
`;

const Dialog = forwardRef(({ className, imageSrc, imageAlt, title, description, link, closeModal }, ref) => {
    return (
        <Container ref={ref} className={className}>
            <Header>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                />
            </Header>

            <Body>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Body>

            <Footer>
                <Link href={link} passHref>
                    <Button as="a" border>Open project</Button>
                </Link>
                <Button onClick={closeModal}>Close</Button>
            </Footer>
        </Container>
    );
});

export default Dialog;