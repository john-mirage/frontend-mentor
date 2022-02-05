import styled from "styled-components";
import BaseToggleButton from "@components/solution/interactive-pricing/toggle-button";
import BaseBadge from "@components/solution/interactive-pricing/badge";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    @media screen and (min-width: 520px) {
        flex-direction: row;
    }
`;

const Text = styled.p`
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const ToggleButton = styled(BaseToggleButton)`
    margin-top: 3rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 520px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;

const Badge = styled(BaseBadge)`
    position: absolute;
    top: 50%;
    right: -0.5rem;
    transform: translate(100%, -50%);
    margin-top: 0.2rem;

    @media screen and (min-width: 860px) {
        right: -1rem;
    }
`;

function Plan(props) {
    return (
        <Container className={props.className}>
            <Text>Monthly Billing</Text>
            <ToggleButton setPlan={props.setPlan} />
            <Text>Yearly Billing<Badge>-25%</Badge></Text>
        </Container>
    );
}

export default Plan;