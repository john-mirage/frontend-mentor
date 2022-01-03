import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f4f6;
    padding: 2rem;
    border-radius: 1.6rem;

    @media screen and (min-width: 384px) {
        flex-direction: row;
    }

    @media screen and (min-width: 550px) {
        padding: 2.5rem;
    }
`;

const Section = styled.div`
    flex-grow: 0;
    flex-shrink: 0;

    &:first-child {
        margin-bottom: 1.5rem;
        @media screen and (min-width: 384px) {
            margin-bottom: 0;
            margin-right: 2rem;
        }
    }

    &:last-child {
        margin-top: 1.5rem;
        @media screen and (min-width: 384px) {
            margin-top: 0;
            margin-left: auto;
        }
    }
`;

const Icon = styled.img`
    display: block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;

const Plan = styled.h2`
    font-size: 1.6rem;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0.2rem;
    color: ${props => props.theme.primaryText};

    @media screen and (min-width: 532px) {
        margin-bottom: 0.4rem;
    }
`;

const Price = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.secondaryText};
`;

const Action = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    text-decoration: underline;
    color: ${props => props.theme.brightBlue};
    cursor: pointer;

    &:hover {
        opacity: 75%;
    }
`;

function Order(props) {
    return (
        <Container>

            <Section>
                <Icon
                    src={props.iconSrc}
                    alt={props.iconAlt}
                />
            </Section>
            
            <Section>
                <Plan>
                    {props.plan}
                </Plan>
                <Price>
                    {props.price}
                </Price>
            </Section>

            <Section>
                <Action>
                    {props.action}
                </Action>
            </Section>

        </Container>
    );
}

export default Order;