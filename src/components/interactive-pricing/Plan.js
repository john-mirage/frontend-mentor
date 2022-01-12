import styled from "styled-components";
import ToggleButton from "@components/interactive-pricing/ToggleButton";
import Badge from "@components/interactive-pricing/Badge";

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

const StyledToggleButton = styled(ToggleButton)`
    margin-top: 3rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 520px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;

const StyledBadge = styled(Badge)`
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
            <StyledToggleButton />
            <Text>Yearly Billing<StyledBadge>-25%</StyledBadge></Text>
        </Container>
    );
}

export default Plan;