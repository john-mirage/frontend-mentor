import Image from "next/image";
import styled from "styled-components";
import musicIcon from "@assets/order-summary/icon-music.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.03);
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
`;

const Icon = styled(Section)`
    margin-bottom: 1.5rem;

    @media screen and (min-width: 384px) {
        margin-bottom: 0;
        margin-right: 2rem;
    }
`;

const Info = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 4.5rem;
`;

const Action = styled(Section)`
    margin-top: 1.5rem;

    @media screen and (min-width: 384px) {
        margin-top: 0;
        margin-left: auto;
    }
`;

const Plan = styled.h2`
    font-size: 1.6rem;
    font-weight: 900;
    margin-top: 0;
    color: ${props => props.theme.color.neutral.darkGray};
`;

const Price = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.color.neutral.gray};
`;

const Link = styled.a`
    font-size: 1.4rem;
    font-weight: 900;
    text-decoration: underline;
    color: ${props => props.theme.color.primary.brightBlue};
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 300ms;

    &:hover {
        opacity: 80%;
        text-decoration: none;
    }
`;

function Order(props) {
    return (
        <Container className={props.className}>
            <Icon>
                <Image
                    src={musicIcon}
                    alt="An icon of a music note"
                    width="50"
                    height="50"
                />
            </Icon>
            
            <Info>
                <Plan>Annual Plan</Plan>
                <Price>$59.99/year</Price>
            </Info>

            <Action>
                <Link>Change</Link>
            </Action>
        </Container>
    );
}

export default Order;