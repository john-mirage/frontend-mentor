import { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.article`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color.neutral.darkGray};
    border-radius: 2rem;
    overflow: hidden;
    pointer-events: none;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 30rem;
    padding: 4rem;
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${props => props.theme.color.neutral.gray};
`;

const Link = styled.a`
    margin-top: auto;
    width: 100%;
    height: 5rem;
    background-color: lightblue;
`;

const Dialog = forwardRef(({ className, imageSrc, imageAlt, title, description }, ref) => {
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
                <Link />
            </Body>
        </Container>
    );
});

export default Dialog;