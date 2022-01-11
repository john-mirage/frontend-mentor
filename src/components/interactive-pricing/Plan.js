import styled from "styled-components";
import ToggleButton from "@components/interactive-pricing/ToggleButton";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const Monthly = styled(Text)`
    margin-right: 1.5rem;
`;

const Yearly = styled(Text)`
    position: relative;
    margin-left: 1.5rem;
`;

const Badge = styled.p`
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
    width: auto;
    height: auto;
    transform: translate(110%, -50%);
    font-size: 1.2rem;
    font-weight: 800;
    padding: 0 1.2rem;
    border-radius: 1.25rem;
    line-height: 2.5rem;
    color: ${props => props.theme.color.primary.lightRed};
    background-color: ${props => props.theme.color.primary.lightGrayishRed};
`;

function Plan(props) {
    return (
        <Container className={props.className}>
            <Monthly>Monthly Billing</Monthly>
            <ToggleButton />
            <Yearly>Yearly Billing<Badge>-25%</Badge></Yearly>
        </Container>
    );
}

export default Plan;