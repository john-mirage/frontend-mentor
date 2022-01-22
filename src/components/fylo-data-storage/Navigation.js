import styled from "styled-components";
import brandLogo from "@assets/fylo-data-storage/logo.svg";
import documentIcon from "@assets/fylo-data-storage/icon-document.svg";
import folderIcon from "@assets/fylo-data-storage/icon-folder.svg";
import uploadIcon from "@assets/fylo-data-storage/icon-upload.svg";

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 4rem;
    background-color: ${props => props.theme.color.neutral.darkBlue};
    border-top-left-radius: 1rem;
    border-top-right-radius: 10rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;

const Logo = styled.img`
    width: auto;
    height: 4.8rem;
    margin-bottom: 4rem;
`;

const Links = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: auto;
`;

const Link = styled.a`
    flex: 0 0 4.8rem;
    position: relative;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 1rem;
    background-color: ${props => props.theme.color.neutral.veryDarkBlue};
    border-radius: 1rem;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (min-width: 365px) {
        flex: 0 0 5.6rem;
        width: 5.6rem;
        height: 5.6rem;
        margin-right: 2rem;
    }
`;

const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.4rem;
    height: auto;
`;

function Navigation(props) {
    return (
        <Container className={props.className}>
            <Logo src={brandLogo.src} />
            <Links>
                <Link>
                    <Icon src={documentIcon.src} />
                </Link>

                <Link>
                    <Icon src={folderIcon.src} />
                </Link>

                <Link>
                    <Icon src={uploadIcon.src} />
                </Link>
            </Links>
        </Container>
    );
}

export default Navigation;