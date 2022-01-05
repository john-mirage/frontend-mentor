import Image from "next/image";
import styled from "styled-components";
import mobileIllustration from "@assets/faqaccordioncard/illustration-woman-online-mobile.svg";
import mobileShadow from "@assets/faqaccordioncard/bg-pattern-mobile.svg";
import desktopIllustration from "@assets/faqaccordioncard/illustration-woman-online-desktop.svg";
import desktopShadow from "@assets/faqaccordioncard/bg-pattern-desktop.svg";
import desktopBox from "@assets/faqaccordioncard/illustration-box-desktop.svg";

const Mobile = styled.div`
    width: 65vw;
    height: 58vw;
    margin-top: -32%;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
    background-image:
        url(${mobileIllustration.src}),
        url(${mobileShadow.src});
    background-repeat: no-repeat;
    background-size: 100%, 100%;
    background-position: top, bottom;

    @media screen and (min-width: 748px) {
        width: 50rem;
        height: 44rem;
        margin-top: -25rem;
    }

    @media screen and (min-width: 1248px) {
        display: none;
    }
`;

const Desktop = styled.div`
    display: none;
    
    @media screen and (min-width: 1248px) {
        position: relative;
        display: block;
        flex: 1 1 40%;
        background-image:
            url(${desktopIllustration.src}),
            url(${desktopShadow.src});
        background-repeat: no-repeat;
        background-size: 120% auto, 240% auto;
        background-position: 100% 50%, 100% 65%;
    }
`;

const DesktopBox = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -15%);
`;

function Illustration() {
    return (
        <>
            <Mobile />
            <Desktop>
                <DesktopBox>
                    <Image
                        src={desktopBox}
                        width="191"
                        height="184"
                    />
                </DesktopBox>
            </Desktop>
        </>
    );
}

export default Illustration;